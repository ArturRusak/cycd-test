import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouter } from 'src/AppRouter';

import { ErrorBoundary } from './components/ErrorBoundary';
import { ThemeProvider } from './useTheme';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline enableColorScheme />
      <ErrorBoundary>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
