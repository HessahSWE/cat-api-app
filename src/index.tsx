// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import './i18n'; // Import the i18n configuration
import { useLanguageStore } from './store/LanguageStore';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root')!);

const Main = () => {
  const { direction } = useLanguageStore();

  React.useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);

  return <App />;
};

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  </React.StrictMode>
);
