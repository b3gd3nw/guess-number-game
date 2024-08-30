import axios from 'axios';

export const startGame = async () => {

    const apiUrl = process.env.REACT_APP_API_BASE_URL;
 
    try {
        const response = await axios.post(`${apiUrl}/start_game`);
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
