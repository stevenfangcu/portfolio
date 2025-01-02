import { useState, useEffect } from 'react';
import { getDailyTimeSeries } from '../../../utils/alphaVantageApi';
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

// Register ChartJS components
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

const StockData = () => {
  const [stockData, setStockData] = useState<StockDataType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [symbol, setSymbol] = useState('IBM');

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getDailyTimeSeries(symbol);
      setStockData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [symbol]);

  const prepareChartData = () => {
    if (!stockData || !stockData['Time Series (Daily)']) return null;

    const timeSeriesData = stockData['Time Series (Daily)'];
    const dates = Object.keys(timeSeriesData).slice(0, 30).reverse();
    const closingPrices = dates.map(date => parseFloat(timeSeriesData[date]['4. close']));

    return {
      labels: dates,
      datasets: [
        {
          label: `${symbol} Stock Price`,
          data: closingPrices,
          borderColor: '#4ade80',
          backgroundColor: 'rgba(74, 222, 128, 0.1)',
          tension: 0.1,
          fill: true,
        },
      ],
    };
  };

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white',
        },
      },
      title: {
        display: true,
        text: 'Stock Price History',
        color: 'white',
      },
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'white',
        },
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
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
      <div className="mb-4">
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          placeholder="Enter stock symbol"
          className="form-control bg-dark text-white"
        />
        <button 
          onClick={fetchData}
          className="btn btn-outline-success mt-2"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Fetch Data'}
        </button>
      </div>

      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      {stockData && !error && (
        <div className="chart-container" style={{ height: '400px' }}>
          {prepareChartData() && (
            <Line data={prepareChartData()!} options={chartOptions} />
          )}
        </div>
      )}
    </div>
  );
};

export default StockData; 