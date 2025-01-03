import { useState, useEffect } from 'react';
import { getDailyTimeSeries } from '../../../utils/alphaVantageApi';
import { defaultStockData } from '../../../consts/DefaultStockData';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface TimeSeriesData {
  [date: string]: {
    '4. close': string;
    [key: string]: string;
  };
}

interface StockDataType {
  'Time Series (Daily)': TimeSeriesData;
}

interface StockEntry {
  symbol: string;
  data: StockDataType | null;
  color: string;
}

const COLORS = [
  '#4ade80', // green
  '#60a5fa', // blue
  '#f87171', // red
  '#fbbf24', // yellow
  '#a78bfa', // purple
];

type TimeRange = '1D' | '1W' | '1M' | '3M' | '6M';

const StockData = () => {
  const [stocks, setStocks] = useState<StockEntry[]>(
    Object.keys(defaultStockData).map((symbol, index) => ({
      symbol,
      data: null,
      color: COLORS[index % COLORS.length]
    }))
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newSymbol, setNewSymbol] = useState('');
  const [isUsingDefaultData, setIsUsingDefaultData] = useState(false);
  const [timeRange, setTimeRange] = useState<TimeRange>('1M');

  const fetchData = async (symbol: string) => {
    try {
      const data = await getDailyTimeSeries(symbol);
      if ('Time Series (Daily)' in data) {
        return data as StockDataType;
      }
      if (data.Note?.includes('API call frequency') || data.Information?.includes('https://www.alphavantage.co/premium/')) {
        // API limit reached, use default data
        if (defaultStockData[symbol as keyof typeof defaultStockData]) {
          setIsUsingDefaultData(true);
          return defaultStockData[symbol as keyof typeof defaultStockData] as StockDataType;
        }
        throw new Error('No default data available for this symbol');
      }
      throw new Error('Invalid data format received from API: ' + data.Information);
    } catch (err) {
      if (defaultStockData[symbol as keyof typeof defaultStockData]) {
        setIsUsingDefaultData(true);
        return defaultStockData[symbol as keyof typeof defaultStockData] as StockDataType;
      }
      throw err;
    }
  };

  useEffect(() => {
    const loadDefaultData = () => {
      const defaultStocks = stocks.map(stock => ({
        ...stock,
        data: defaultStockData[stock.symbol as keyof typeof defaultStockData] as StockDataType
      }));
      setStocks(defaultStocks);
      setIsUsingDefaultData(true);
    };

    loadDefaultData();
  }, []); // Only run once on mount

  const fetchAllStocks = async () => {
    setLoading(true);
    setError(null);
    try {
      const updatedStocks = await Promise.all(
        stocks.map(async (stock) => ({
          ...stock,
          data: await fetchData(stock.symbol)
        }))
      );
      setStocks(updatedStocks);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllStocks();
  }, []); // Only fetch on initial load

  const addStock = async () => {
    if (!newSymbol || stocks.some(s => s.symbol === newSymbol)) {
      return;
    }

    // Check if symbol exists in default data when API is limited
    if (isUsingDefaultData && !defaultStockData[newSymbol as keyof typeof defaultStockData]) {
      setError('Demo mode: Only IBM, AAPL, and MSFT are available');
      return;
    }

    const newColor = COLORS[stocks.length % COLORS.length];
    setStocks(prev => [...prev, { symbol: newSymbol, data: null, color: newColor }]);
    setNewSymbol('');
    
    try {
      const data = await fetchData(newSymbol);
      setStocks(prev => prev.map(stock => 
        stock.symbol === newSymbol ? { ...stock, data } : stock
      ));
    } catch (err) {
      setError(`Error fetching data for ${newSymbol}`);
      setStocks(prev => prev.filter(s => s.symbol !== newSymbol));
    }
  };
  const exportData = () => {
    const data = stocks.map(stock => ({
      symbol: stock.symbol,
      data: stock.data
    }));
    console.log(data);
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'stock_data.json';
    a.click();
  };

  const removeStock = (symbolToRemove: string) => {
    setStocks(prev => prev.filter(s => s.symbol !== symbolToRemove));
  };

  const getFilteredDates = (dates: string[], range: TimeRange): string[] => {
    const today = new Date();
    const filtered = dates.filter(date => {
      const dateObj = new Date(date);
      const diffTime = Math.abs(today.getTime() - dateObj.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      switch (range) {
        case '1D':
          return diffDays <= 1;
        case '1W':
          return diffDays <= 7;
        case '1M':
          return diffDays <= 30;
        case '3M':
          return diffDays <= 90;
        case '6M':
          return diffDays <= 180;
        default:
          return true;
      }
    });
    
    return filtered.reverse();
  };

  const prepareChartData = () => {
    if (!stocks.some(stock => stock.data)) return null;

    // Get all available dates from all stocks
    const allDates = new Set<string>();
    stocks.forEach(stock => {
      if (stock.data) {
        Object.keys(stock.data['Time Series (Daily)']).forEach(date => allDates.add(date));
      }
    });

    const dates = getFilteredDates(Array.from(allDates).sort(), timeRange);

    return {
      labels: dates,
      datasets: stocks.map(stock => ({
        label: stock.symbol,
        data: dates.map(date => {
          if (!stock.data) return null;
          const value = stock.data['Time Series (Daily)'][date]?.['4. close'];
          return value ? parseFloat(value) : null;
        }),
        borderColor: stock.color,
        backgroundColor: `${stock.color}1A`,
        tension: 0.1,
        fill: true,
      })),
    };
  };

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: 'white' },
      },
      title: {
        display: true,
        text: 'Stock Price History',
        color: 'white',
      },
    },
    scales: {
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
        ticks: { color: 'white' },
      },
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
        ticks: {
          color: 'white',
          maxRotation: 45,
          minRotation: 45,
        },
      },
    },
  };

  return (
    <div className="stock-data-container p-4">
      {isUsingDefaultData && (
        <div className="alert alert-warning mb-3">
          <i className="fas fa-info-circle me-2"></i>
          API limit reached. Using demo data (available symbols: IBM, AAPL, MSFT)
        </div>
      )}
      
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex gap-2">
            <input
              type="text"
              value={newSymbol}
              onChange={(e) => setNewSymbol(e.target.value.toUpperCase())}
              placeholder="Enter stock symbol"
              className="form-control bg-dark text-white"
            />
            <button
              onClick={addStock}
              className="btn btn-outline-success"
              disabled={loading || !newSymbol}
            >
              Add Stock
            </button>
            <button
              onClick={exportData}
              className="btn btn-outline-primary"
              disabled={loading || stocks.length === 0}
            >
              Export Data
            </button>
          </div>
          
          <div className="btn-group">
            {(['1D', '1W', '1M', '3M', '6M'] as TimeRange[]).map((range) => (
              <button
                key={range}
                className={`btn btn-outline-secondary ${timeRange === range ? 'active' : ''}`}
                onClick={() => setTimeRange(range)}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        <div className="d-flex flex-wrap gap-2 mb-3">
          {stocks.map((stock) => (
            <div
              key={stock.symbol}
              className="badge bg-dark border border-secondary d-flex align-items-center gap-2 p-2"
            >
              <span>{stock.symbol}</span>
              <button
                onClick={() => removeStock(stock.symbol)}
                className="btn btn-link text-danger p-0 ms-2"
                style={{ fontSize: '1.2rem', lineHeight: 1 }}
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={fetchAllStocks}
          className="btn btn-outline-primary"
          disabled={loading || stocks.length === 0}
        >
          {loading ? 'Loading...' : 'Refresh All'}
        </button>
      </div>

      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      <div className="chart-container" style={{ height: '400px' }}>
        {prepareChartData() && (
          <Line data={prepareChartData()!} options={chartOptions} />
        )}
      </div>
    </div>
  );
};

export default StockData; 