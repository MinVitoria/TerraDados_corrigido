import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [authError, setAuthError] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  // Simulação simples de usuário (em memória)
  useEffect(() => {
    // Para fins de desenvolvimento, simulamos um usuário logado.
    // Mude para false se quiser que o app exija login.
    const mockUser = {
      id: "1",
      email: "pesquisador@exemplo.com",
      name: "Pesquisador Teste",
      role: "user"
    };

    setUser(mockUser);
    setIsAuthenticated(true);
    setIsLoadingAuth(false);
    setAuthChecked(true);
  }, []);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    setAuthError(null);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    // Não usamos localStorage
  };

  const value = {
    user,
    isAuthenticated,
    isLoadingAuth,
    authError,
    authChecked,
    login,
    logout,
    // Mantido para compatibilidade com componentes existentes
    navigateToLogin: () => console.log("Redirecionar para login (mock)"),
    checkUserAuth: () => {},
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
