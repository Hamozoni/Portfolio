import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext'
import { TranslationProvider } from './context/TranslationContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <TranslationProvider>
    <App />
      </TranslationProvider>
    </ThemeProvider>
  </StrictMode>,
)
