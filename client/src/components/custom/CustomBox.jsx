import React from 'react';
import { Box } from '@mui/material';

function CustomBox({ children, ...props }) {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ padding: '20px', boxSizing: 'border-box' }}
            {...props}  // Прокидываем остальные пропсы, такие как `sx` и т.д.
        >
            {children}
        </Box>
    );
}

export default CustomBox;