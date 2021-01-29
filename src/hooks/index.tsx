import React from 'react';

import { UserProvider } from './user';
import { UserSearchProvider } from './userSearch';

const AppProvider: React.FC = ({ children }) => (
  <UserProvider>
    <UserSearchProvider>{children}</UserSearchProvider>
  </UserProvider>
);

export default AppProvider;
