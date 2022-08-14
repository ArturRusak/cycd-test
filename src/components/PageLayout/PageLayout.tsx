import type { ReactNode } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';

interface PageLayoutProps {
  children?: ReactNode;
  title?: string;
}

export const PageLayout = ({ children, title }: PageLayoutProps) => {
  return (
    <Grid container direction="column" flexWrap="nowrap" height="100vh" overflow="auto">
      <Header />
      <Box sx={{ flex: 1, maxWidth: '1140px', width: '100%', margin: '0 auto', px: 4, pt: 2 }}>
        <Typography align="center" mb={2} variant="h1">
          {title}
        </Typography>
        {children}
      </Box>
      <Footer title={title} />
    </Grid>
  );
};
