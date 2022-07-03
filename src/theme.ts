import { createTheme } from '@mui/material';
import { ThemeMode } from 'src/types';

export const setTheme = (mode: ThemeMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });
