interface AlphaVantageResponse {
  [key: string]: any;
}

export const fetchStockData = async (
  symbol: string,
  function_name: string = 'TIME_SERIES_DAILY',
  interval: string = '5min'
): Promise<AlphaVantageResponse> => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = 'https://www.alphavantage.co/query';

  try {
    const response = await fetch(
      `${BASE_URL}?function=${function_name}&symbol=${symbol}&interval=${interval}&apikey=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error;
  }
};

// Example usage for different endpoints
export const getIntraDay = async (symbol: string) => {
  return fetchStockData(symbol, 'TIME_SERIES_INTRADAY', '5min');
};

export const getDailyTimeSeries = async (symbol: string) => {
  return fetchStockData(symbol, 'TIME_SERIES_DAILY');
};

export const getGlobalQuote = async (symbol: string) => {
  return fetchStockData(symbol, 'GLOBAL_QUOTE');
};

export const searchSymbol = async (keywords: string) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = 'https://www.alphavantage.co/query';

  try {
    const response = await fetch(
      `${BASE_URL}?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching symbol:', error);
    throw error;
  }
}; 