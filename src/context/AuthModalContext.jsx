import React, { createContext, useContext, useState } from 'react';

const AuthModalContext = createContext();

export function AuthModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('login'); // 'login' or 'register'

  const openAuthModal = (initialView = 'login') => {
    setView(initialView);
    setIsOpen(true);
  };

  const closeAuthModal = () => {
    setIsOpen(false);
  };

  const toggleView = () => {
    setView((prev) => (prev === 'login' ? 'register' : 'login'));
  };

  return (
    <AuthModalContext.Provider
      value={{
        isOpen,
        view,
        openAuthModal,
        closeAuthModal,
        toggleView,
        setView
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  const context = useContext(AuthModalContext);
  if (!context) {
    throw new Error('useAuthModal must be used within an AuthModalProvider');
  }
  return context;
}
