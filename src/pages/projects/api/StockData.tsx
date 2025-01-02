import { useState, useEffect } from 'react';
import { getDailyTimeSeries } from '../../../utils/alphaVantageApi';

export const StockData = () => {
  const [stockData, setStockData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await getDailyTimeSeries('IBM');
      setStockData(data);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!stockData) return <div>No data available</div>;

  return (
    <div>
      <h2>Stock Data</h2>
      <pre>{JSON.stringify(stockData, null, 2)}</pre>
    </div>
  );
};

export default StockData; 