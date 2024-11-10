import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './AppRoutes.tsx'
import SSRProvider from 'react-bootstrap/SSRProvider';

createRoot(document.getElementById('root')!).render(
  <SSRProvider>
    <StrictMode>
      <AppRoutes />
    </StrictMode>
  </SSRProvider>
);