import React from 'react';

import GlobalStyle from './styles/globals';

import Home from './pages/Home';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppProvider>
        <Home />
      </AppProvider>
    </>
  );
};

export default App;
