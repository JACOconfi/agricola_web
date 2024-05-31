import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 /* const [authenticated, setAuthenticated] = useState(null); */
  const [authenticated, setAuthenticated] = useState(() => {
    // Obtener el estado de autenticación almacenado en el almacenamiento local al cargar la página
    return localStorage.getItem('authenticated') === 'true';
  });


  const login = () => {
    setAuthenticated(true);
  };

  const logout = () => {
    setAuthenticated(false);
  };

  // Almacenar el estado de autenticación en el almacenamiento local al cambiar
  useEffect(() => {
    localStorage.setItem('authenticated', authenticated);
  }, [authenticated]);

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



