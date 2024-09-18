import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const fetchHighPricedItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/users/high-priced-items`);
    return response.data;
  } catch (error) {
    console.error('Error fetching high-priced items:', error);
    throw error;
  }
};

export const fetchSellersStartingWithR = async () => {
  try {
    const response = await axios.get(`${API_URL}/items/sellers-starting-with-r`);
    return response.data;
  } catch (error) {
    console.error('Error fetching sellers starting with R:', error);
    throw error;
  }
};
