import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { themeOptions } from '../theme/themes'

const ThemeContext = createContext()

const STORAGE_KEY = 'portfolio-theme'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return themeOptions[0].id
  return localStorage.getItem(STORAGE_KEY) || themeOptions[0].id
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme)

  const activeTheme = useMemo(
    () => themeOptions.find((option) => option.id === theme) || themeOptions[0],
    [theme],
  )

  useEffect(() => {
    if (typeof document === 'undefined') return
    const root = document.documentElement
    root.dataset.theme = activeTheme.id

    Object.entries(activeTheme.tokens).forEach(([token, value]) => {
      root.style.setProperty(token, value)
    })

    localStorage.setItem(STORAGE_KEY, activeTheme.id)
  }, [activeTheme])

  const value = useMemo(
    () => ({
      theme: activeTheme.id,
      setTheme,
      themes: themeOptions,
      activeTheme,
    }),
    [activeTheme, setTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

