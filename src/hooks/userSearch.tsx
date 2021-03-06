import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';

import { useUser } from './user';

interface UserSearchContextData {
  searchTerm: string;
  setSearchTerm(term: string): void;
  handleSearch(): void;
}

const UserSearchContext = createContext<UserSearchContextData>(
  {} as UserSearchContextData,
);

const UserSearchProvider: React.FC = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const { backupResults, setResults } = useUser();

  useEffect(() => {
    if (!searchTerm) setResults(backupResults);

    handleSearch();
  }, [searchTerm]);

  const handleSearch = useCallback(async () => {
    const filteredResults = backupResults.filter(result => {
      const regex = new RegExp(searchTerm, 'i');
      return (
        result.name.first.match(regex) ||
        result.name.last.match(regex) ||
        result.gender === searchTerm.toLowerCase()
      );
    });

    if (!searchTerm) return;

    setResults(filteredResults);
  }, [searchTerm]);

  return (
    <UserSearchContext.Provider
      value={{ searchTerm, setSearchTerm, handleSearch }}
    >
      {children}
    </UserSearchContext.Provider>
  );
};

function useUserSearch(): UserSearchContextData {
  const context = useContext(UserSearchContext);

  if (!context) {
    throw new Error('useSearch must be used within an userSearchProvider');
  }

  return context;
}

export { UserSearchProvider, useUserSearch };
