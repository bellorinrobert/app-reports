import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from '../pages/LoginPage/LoginPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import ReportsPage from '../pages/ReportsPage/ReportPage';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/reports" element={<ReportsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;

