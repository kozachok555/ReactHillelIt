import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router'
import App from './App.jsx'
import React from 'react'
import ErrorBoundary from './ErrorBoundary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <ErrorBoundary>
         <App />
      </ErrorBoundary>
     </BrowserRouter>
  </StrictMode>,
)
