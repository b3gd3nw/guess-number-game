
import React from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import CustomButton from '../components/custom/CutomButton';
import CustomBox from '../components/custom/CustomBox';

function FlowPage(props) {
    const { nextPage, title, buttonText } = props;
    const navigate = useNavigate();

    const goToGamePage = () => {
        navigate(nextPage);
    };

    return (
        <CustomBox>
            <Stack spacing={2} direction="column" textAlign={'center'} alignItems="center">
                <Typography variant="h4" gutterBottom>
                    {title}
                </Typography>
                <CustomButton buttonText={buttonText} onClick={goToGamePage} />
            </Stack>
        </CustomBox>
    );
}

export default FlowPage;