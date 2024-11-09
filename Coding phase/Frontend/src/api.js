import axios from 'axios';

const API_URL = 'http://localhost:3001'; 

export const getItems = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/items`);
        return response.data.rows;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
};