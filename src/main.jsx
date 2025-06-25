import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './provider/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
);
