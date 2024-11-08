import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './AppRoutes.tsx'

createRoot(document.getElementById('root')!).render(
  <div>
    <StrictMode>
      <AppRoutes />
    </StrictMode>
  </div>
);