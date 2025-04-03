import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem('token');
      
      if (storedToken) {
        try {
          // Verify token is still valid
          const decoded = jwtDecode(storedToken);
          const currentTime = Date.now() / 1000;
          
          if (decoded.exp && decoded.exp < currentTime) {
            // Token expired
            logout();
          } else {
            // Valid token
            setToken(storedToken);
            setUser({
              email: decoded.email,
              username: decoded.username
            });
            setIsAuthenticated(true);
          }
        } catch (error) {
          // Invalid token
          console.error('Invalid token:', error);
          logout();
        }
      }
      
      setIsLoading(false);
    };
    
    initializeAuth();
  }, []);

  // Login function
  const login = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    
    // Decode and set user info
    try {
      const decoded = jwtDecode(newToken);
      setUser({
        email: decoded.email,
        username: decoded.username
      });
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  // Check if token is expired
  const isTokenExpired = () => {
    if (!token) return true;
    
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decoded.exp < currentTime;
    } catch (error) {
      return true;
    }
  };

  // Function to get auth header for API requests
  const getAuthHeader = () => {
    return token ? { Authorization: token } : {};
  };

  // Value object to be provided to consumers
  const contextValue = {
    token,
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    isTokenExpired,
    getAuthHeader
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;