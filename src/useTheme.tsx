import { createContext, useContext, useMemo, useState } from 'react';
import { type Theme, ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';
import { setTheme } from 'src/theme';
import { ThemeMode } from 'src/types';

// TODO: someday I will add this
interface ThemeProviderData {
  mode: ThemeMode;
  toggleMode: () => void;
  theme: Theme;
}

const defaultTheme = {
  mode: ThemeMode.LIGHT,
};

export const ThemeContext = createContext<ThemeProviderData>({
  mode: defaultTheme.mode,
  toggleMode: () => {},
  theme: {} as Theme,
});

interface MyProviderProps {
  children: any;
}

export const ThemeProvider = ({ children }: MyProviderProps) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(defaultTheme.mode);
  const toggleMode = () => {
    setThemeMode((prevMode) => (prevMode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK));
  };
  const theme = useMemo(() => setTheme(themeMode), [themeMode]);

  return (
    <ThemeContext.Provider
      value={{
        mode: themeMode,
        toggleMode,
        theme,
      }}
    >
      <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeProviderData => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
