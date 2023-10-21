import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserProvider } from './context/userContext.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <App />
        </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
