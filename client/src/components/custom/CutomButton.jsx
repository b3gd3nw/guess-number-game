import React from 'react';
import { Button } from '@mui/material';
function CustomButton({ buttonText, onClick }) {
    return (
        <Button
            variant="contained"
            sx={{ width: '100%', maxWidth: '300px' }}
            onClick={onClick}>{buttonText}
        </Button>
    );
}

export default CustomButton;