import { ReactNode } from 'react';
import { Grid, Typography } from '@mui/material';

interface PageLayoutProps {
  children?: ReactNode;
  title?: string;
}

export const PageLayout = ({ children, title }: PageLayoutProps) => {
  return (
    <Grid container direction="column" height="100%" flexWrap="nowrap" overflow="auto">
      {title && (
        <Grid container item direction="column" flexWrap="nowrap" flexShrink={0} spacing={1} p={2} mb={2}>
          {title && (
            <Grid item>
              <Typography variant="h1">{title}</Typography>
            </Grid>
          )}
        </Grid>
      )}

      <Grid item flex={1}>
        {children}
      </Grid>
    </Grid>
  );
};
