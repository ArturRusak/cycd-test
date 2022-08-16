import { createTheme } from '@mui/material';
import { ThemeMode } from 'src/types';

export const setTheme = (mode: ThemeMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#3f51b5',
        light: '#9b9b9b',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });
