import React, { useState } from 'react';
import { startGame } from "../api/api";
import { Stack, Typography } from '@mui/material';
import CustomButton from '../components/custom/CutomButton';
import CustomBox from '../components/custom/CustomBox';
import GameForm from '../forms/GameForm';

function GamePage() {
    const [additionMessage, setAdditionMessage] = useState('');
    const [gameStarted, setGameStarted] = useState(false);

    const handleStartGame = async () => {
        try {
            const response = await startGame();
            console.log(response.data.message);
            setGameStarted(true);
            setAdditionMessage(response.data.message);
        } catch (error) {
            setAdditionMessage('Error: ' + error.message);
        }

    };

    return (
        <CustomBox>
            {!gameStarted ? (
                <>
                    <Stack direction="column" textAlign={'center'} alignItems="center" spacing={2}>
                        <Typography variant="h4" gutterBottom>
                            I will guess a number from 1 to 100
                        </Typography>
                        <CustomButton buttonText="START GAME" onClick={handleStartGame} />
                    </Stack>
                </>
            ) : (
                <>
                    <Typography variant="h4" gutterBottom>
                        Guess the Number
                    </Typography>
                    <GameForm additionMessage={additionMessage} />
                </>
            )}
        </CustomBox>
    );
}

export default GamePage;