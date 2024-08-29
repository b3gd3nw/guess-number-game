import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { guessNumber } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { FormControl, TextField, FormHelperText } from '@mui/material';
import CustomButton from '../components/custom/CutomButton';

function GameForm(props) {
    const { additionMessage } = props;
    const theme = useTheme();
    const [guess, setGuess] = useState('');
    const [resultMessage, setResultMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setResultMessage(additionMessage);
    }, [additionMessage]);

    const handleInputChange = (event) => {
        const value = event.target.value;
        if (/^\d*$/.test(value)) {
            setGuess(value);
        }
    };

    const handleSubmit = async () => {

        if (!guess.trim()) {
            setResultMessage('Please enter a number.');
            return;
        }

        try {
            const response = await guessNumber(Number(guess));

            if (response.end) {
                setResultMessage(response.result);
                navigate('/win');
            } else {
                setResultMessage(response.result);
            }
        } catch (error) {
            setResultMessage('An error occurred. Please try again.');
            console.error('Error during guess submission:', error);
        }
    };


    return (
        <>
            <FormControl
                sx={{ marginBottom: '20px', width: '100%', maxWidth: '300px' }}
            >
                <TextField
                    type="tel"
                    variant="outlined"

                    sx={{
                        '& input': {
                            color: theme.palette.primary.contrastText,

                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: theme.palette.primary.main,
                            },
                            '&:hover fieldset': {
                                borderColor: theme.palette.primary.dark,
                            },
                        },
                    }}
                    value={guess}
                    onChange={handleInputChange}
                />
                <FormHelperText id="outlined-weight-helper-text" sx={{ color: theme.palette.primary.contrastText }}>{resultMessage}</FormHelperText>
            </FormControl>
            <CustomButton buttonText="SUBMIT" onClick={handleSubmit} />
        </>
    );
}

export default GameForm;