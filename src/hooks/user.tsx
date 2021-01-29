import React, { createContext, useContext, useCallback, useState } from 'react';
import api from '../services/api';

interface Pagination {
  page: number;
  perPage: number;
}

export interface Results {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  registered: {
    date: string;
  };
}

interface UserContextData {
  handleGetUserInfo(data: Pagination): Promise<void>;
  results: Results[];
  loading: boolean;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetUserInfo = useCallback(async ({ page, perPage }) => {
    setLoading(true);
    const { data } = await api.get(`?page=${page}&results=${perPage}`);

    console.log('data', data);

    setResults(data.results);
    setLoading(false);
  }, []);

  return (
    <UserContext.Provider value={{ handleGetUserInfo, results, loading }}>
      {children}
    </UserContext.Provider>
  );
};

function useUser(): UserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { UserProvider, useUser };
