import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface User {
  name: string;
  avatar_url: string;
  city: string;
  state: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface ResponseProps {
  token: string;
  user: User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<ResponseProps>(() => {
    const token = localStorage.getItem('@petFinder:token');
    const user = localStorage.getItem('@petFinder:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as ResponseProps;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post<ResponseProps>('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@petFinder:token', token);
    localStorage.setItem('@petFinder:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@petFinder:token');
    localStorage.removeItem('@petFinder:user');

    setData({} as ResponseProps);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
