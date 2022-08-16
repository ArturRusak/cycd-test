import type { ReactNode } from 'react';
import { type SxProps, Box, Grid, Typography } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';

interface PageLayoutProps {
  children?: ReactNode;
  title?: string;
}

const pageStyles: SxProps<Theme> = { flex: 1, maxWidth: '1140px', width: '100%', margin: '0 auto', px: 4, pt: 2 };

const titleStyles: SxProps<Theme> = { mb: 2, fontSize: '32px', fontWeight: 500, textAlign: 'center' };

export const PageLayout = ({ children, title }: PageLayoutProps) => {
  return (
    <Grid container direction="column" flexWrap="nowrap" height="100vh" overflow="auto">
      <Header />
      <Box sx={pageStyles}>
        <Typography sx={titleStyles} variant="h1">
          {title}
        </Typography>
        {children}
      </Box>
      <Footer title={title} />
    </Grid>
  );
};
