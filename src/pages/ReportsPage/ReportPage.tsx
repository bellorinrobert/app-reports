import React from 'react';
import { Box, Typography } from '@mui/material';

const ReportsPage: React.FC = () => {
    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Reports
            </Typography>
            <Typography variant="body1">
                Welcome to the Reports Page. Here you can view and manage your reports.
            </Typography>
        </Box>
    );
};

export default ReportsPage;