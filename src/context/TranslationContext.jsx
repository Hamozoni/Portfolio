import { createContext, useContext, useMemo, useState } from 'react'
import translations from '../i18n/translations'

const TranslationContext = createContext()
const STORAGE_KEY = 'portfolio-lang'

const languageOptions = [
  { id: 'en', label: 'EN' },
  { id: 'pt', label: 'PT' },
  { id: 'ar', label: 'AR' },
]

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return languageOptions[0].id
  return localStorage.getItem(STORAGE_KEY) || languageOptions[0].id
}

const getValueFromPath = (object, path) => {
  if (!path) return object
  return path.split('.').reduce((acc, key) => acc?.[key], object)
}

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage)

  const copy = useMemo(() => translations[language], [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage: (code) => {
        localStorage.setItem(STORAGE_KEY, code)
        setLanguage(code)
      },
      languages: languageOptions,
      copy,
      t: (path) => getValueFromPath(copy, path) ?? path,
    }),
    [copy, language],
  )

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>
}

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}

