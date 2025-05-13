import React from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
    const isAuthenticated = localStorage.getItem('session');

    return isAuthenticated ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
