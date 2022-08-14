import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouter } from 'src/AppRouter';

import { ThemeProvider } from './useTheme';

import './App.css';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
