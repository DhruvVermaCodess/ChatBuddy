import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
    
    // Clear previous errors
    setError('');
    setIsLoading(true);
    
    try {
      const response = await fetch('https://chatbuddy-1fcx.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Invalid credentials');
      }
      
      // Save token and user info in auth context
      login(data.token);
      
      // Reset form
      setEmail('');
      setPassword('');
      
      // Redirect to dashboard or home
      navigate('/chatbot');
      
    } catch (error) {
      setError(error.message || 'Error logging in');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-full h-full rounded-full bg-violet-500 opacity-10 blur-3xl"></div>
        </div>
        <div className="absolute right-1/4 bottom-1/3 w-64 h-64">
          <div className="absolute w-full h-full rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
        </div>
      </div>
      
      <motion.div 
        className="w-full max-w-md p-8 mx-4 bg-black/50 backdrop-blur-lg border border-gray-800 rounded-lg shadow-2xl z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-2xl font-bold text-center mb-6"
          variants={itemVariants}
        >
          Log in to ChatBuddy
        </motion.h2>
        
        {error && (
          <motion.div 
            className="mb-4 p-3 bg-red-900/50 border border-red-800 rounded-md text-red-200 text-sm"
            variants={itemVariants}
          >
            {error}
          </motion.div>
        )}
        
        <form onSubmit={handleSubmit}>
          <motion.div 
            className="mb-4"
            variants={itemVariants}
          >
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700 text-white"
              placeholder="your@email.com"
            />
          </motion.div>
          
          <motion.div 
            className="mb-6"
            variants={itemVariants}
          >
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700 text-white"
              placeholder="••••••••"
            />
          </motion.div>
          
          <motion.button
            type="submit"
            className="w-full bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            variants={itemVariants}
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Continue'}
          </motion.button>
          
          <motion.div 
            className="mt-6 relative flex items-center"
            variants={itemVariants}
          >
            <div className="flex-grow border-t border-gray-800"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-sm">Or</span>
            <div className="flex-grow border-t border-gray-800"></div>
          </motion.div>
          
          <motion.button
            type="button"
            className="w-full mt-6 bg-transparent border border-gray-800 text-white font-medium py-2 px-4 rounded-md hover:bg-gray-900 transition-colors duration-200 flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            variants={itemVariants}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2">
              <path 
                fill="currentColor" 
                d="M21.35 11.1h-9.17v2.73h5.51c-.52 2.48-2.76 4.34-5.51 4.34-3.19 0-5.78-2.57-5.78-5.75s2.59-5.76 5.78-5.76c1.54 0 2.94.61 3.97 1.61l2.06-2.06c-1.69-1.57-3.91-2.51-6.03-2.51-5.24 0-9.5 4.25-9.5 9.5s4.26 9.5 9.5 9.5c5.02 0 9.39-3.64 9.39-9.5 0-.63-.07-1.25-.2-1.85z"
              />
            </svg>
            Continue with Google
          </motion.button>
        </form>
        
        <motion.p 
          className="mt-8 text-center text-sm text-gray-400"
          variants={itemVariants}
        >
          Don't have an account?{' '}
          <Link to='/signup' className="text-white hover:underline">
            Sign up
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoginPage;