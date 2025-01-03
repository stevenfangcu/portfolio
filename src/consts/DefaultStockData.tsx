// Generate 6 months of daily data
const generateHistoricalData = (basePrice: number, volatility: number = 0.02) => {
  const data: { [key: string]: { '4. close': string } } = {};
  const today = new Date();
  
  for (let i = 0; i < 180; i++) { // 6 months of trading days
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    // Skip weekends
    if (date.getDay() === 0 || date.getDay() === 6) continue;
    
    // Random price movement
    const change = (Math.random() - 0.5) * 2 * volatility;
    const price = basePrice * (1 + change);
    basePrice = price; // Use this as next day's base
    
    const dateString = date.toISOString().split('T')[0];
    data[dateString] = { '4. close': price.toFixed(4) };
  }
  
  return data;
};

export const defaultStockData = {
  "IBM": {
    "Time Series (Daily)": generateHistoricalData(160)
  },
  "AAPL": {
    "Time Series (Daily)": generateHistoricalData(185)
  },
  "MSFT": {
    "Time Series (Daily)": generateHistoricalData(374)
  }
}; 