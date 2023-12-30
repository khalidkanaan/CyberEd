import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isCookiePresent } from '../assets/js/helpers.js';

function PrivateRoute({ children }) {
  let location = useLocation();
  const isLoggedIn = isCookiePresent('TEST-AUTH');

  return (
    isLoggedIn ? children : <Navigate to="/" state={{ from: location }} />
  );
}

export default PrivateRoute;