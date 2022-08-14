import { AppBar, Box, Grid } from '@mui/material';

import LanguageSelector from './LanguageSelector';
import { TopNavigation } from './TopNavigation';

export const Header = () => {
  return (
    <AppBar position="static">
      <Grid container flexDirection="column" margin="0 auto" maxWidth="1140px" px={2}>
        <TopNavigation />
        <Box display="flex" justifyContent="flex-end" px={1}>
          <LanguageSelector />
        </Box>
      </Grid>
    </AppBar>
  );
};
