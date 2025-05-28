
import React, { useState } from 'react';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<'login' | 'register' | 'dashboard'>('login');
  const [userData, setUserData] = useState(null);

  const handleLogin = (user: any) => {
    setUserData(user);
    setCurrentPage('dashboard');
  };

  const handleRegister = (user: any) => {
    setUserData(user);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUserData(null);
    setCurrentPage('login');
  };

  if (currentPage === 'dashboard' && userData) {
    return <Dashboard userData={userData} onLogout={handleLogout} />;
  }

  if (currentPage === 'register') {
    return (
      <Register
        onRegister={handleRegister}
        onSwitchToLogin={() => setCurrentPage('login')}
      />
    );
  }

  return (
    <Login
      onLogin={handleLogin}
      onSwitchToRegister={() => setCurrentPage('register')}
    />
  );
};

export default Index;
