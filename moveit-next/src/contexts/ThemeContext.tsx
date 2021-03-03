import React, { useContext, createContext, useState, useEffect } from 'react'

import { DefaultTheme, ThemeProvider } from 'styled-components'
import { combineTheme, dark, light } from '../styles/themes'

interface ThemeContextData {
  theme: DefaultTheme
  ToggleTheme(): void
}

export const ThemeContext = createContext({} as ThemeContextData)

export const ThemesProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(dark))

  useEffect(() => {
    const themeLocal = localStorage.getItem('theme')

    setTheme(themeLocal === 'light' ? combineTheme(light) : combineTheme(dark))
  }, [])

  const ToggleTheme = () => {
    if (theme.title === 'dark') {
      localStorage.setItem('theme', light.title)
      setTheme(combineTheme(light))
    } else {
      localStorage.setItem('theme', dark.title)
      setTheme(combineTheme(dark))
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext)

  return context
}