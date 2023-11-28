import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

const API_URL = process.env.EXPO_PUBLIC_API_URL;
const JWT_KEY = 'user-token';

type AuthProps = {
  token: string | null;
  onRegister: (email: string, password: string) => Promise<any>;
  onLogin: (email: string, password: string) => Promise<any>;
  onLogout: () => Promise<void>;
  initialized: boolean;
};

const AuthContext = createContext<Partial<AuthProps>>({});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState<string | null>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await SecureStore.getItemAsync(JWT_KEY);
      if (storedToken) {
        setToken(storedToken);
        axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      }
      setInitialized(true);
    };
    loadToken();
  }, []);

  const handleLogin = async (email: string, password: string) => {
    try {
      const result = await axios.post(`${API_URL}/auth`, { email, password });
      setToken(result.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;
      await SecureStore.setItemAsync(JWT_KEY, result.data.token);
      return result;
    } catch (error: any) {
      return { error: true, msg: error.response.data.msg };
    }
  };

  const handleRegister = async (email: string, password: string) => {
    try {
      const result = await axios.post(`${API_URL}/user`, { email, password });
      return result;
    } catch (error: any) {
      return { error: true, msg: error.response.data.msg };
    }
  };

  const handleLogout = async () => {
    setToken(null);
    await SecureStore.deleteItemAsync(JWT_KEY);
    axios.defaults.headers.common['Authorization'] = '';
  };

  const value = {
    initialized,
    onLogin: handleLogin,
    onRegister: handleRegister,
    onLogout: handleLogout,
    token,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
