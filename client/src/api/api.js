import axios from 'axios';
const API_BASE_URL = 'http://localhost:5000/api'; // Змініть порт на 5000

export const startGame = async () => {
    try {
        const response = await axios.post(`${ API_BASE_URL }/start_game`);
        return response;
    } catch (error) {
        console.log('Error starting game:', error);
        console.error('Error starting game:', error);
    }
};

export const guessNumber = async (number) => {
    try {
        const response = await axios.post('/api/guess', { number: number });
        console.log('Guess response:', response);
        return response.data;
    } catch (error) {
        console.error('Error guessing number:', error);
    }
};
