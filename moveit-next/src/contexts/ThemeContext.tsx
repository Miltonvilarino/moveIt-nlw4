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

  const ToggleTheme = () => {
    if (theme.title === 'dark') {
      setTheme(combineTheme(light))
    } else {
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