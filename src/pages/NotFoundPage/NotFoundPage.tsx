import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            textAlign="center"
        >
            <Typography variant="h1" color="error" gutterBottom>
                404
            </Typography>
            <Typography variant="h5" gutterBottom>
                Página no encontrada
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
                Lo sentimos, la página que estás buscando no existe.
            </Typography>
            <Button variant="contained" color="primary" onClick={handleGoHome}>
                Volver al inicio
            </Button>
        </Box>
    );
};

export default NotFoundPage;