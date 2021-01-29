import React, { createContext, useContext, useCallback, useState } from 'react';
import api from '../services/api';

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
  handleGetUserInfo(): Promise<void>;
  results: Results[];
  loading: boolean;
  page: number;
  perPage: number;
  setPage(p: number): void;
}

const PER_PAGE = 50;

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {
  const [results, setResults] = useState<Results[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleGetUserInfo = useCallback(async () => {
    setLoading(true);
    const { data } = await api.get(`?page=${page}&results=${PER_PAGE}`);

    setResults([...results, ...data.results]);
    setLoading(false);
  }, [page]);

  return (
    <UserContext.Provider
      value={{
        handleGetUserInfo,
        results,
        loading,
        perPage: 50,
        page,
        setPage,
      }}
    >
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
