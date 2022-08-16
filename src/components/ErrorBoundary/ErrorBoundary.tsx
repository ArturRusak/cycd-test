import React from 'react';
import { ErrorBoundary as ErrorComponent, FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { Box, Button, Grid, Typography } from '@mui/material';

const FallbackError = ({ error, resetErrorBoundary }: FallbackProps) => {
  const { t } = useTranslation('common');
  return (
    <Grid container alignItems="center" justifyContent="center" sx={{ height: '100vh' }}>
      <Grid item p={3} sx={{ textAlign: 'center' }}>
        <Box mb={2}>
          <Typography mb={2} variant="h3">
            {t(`errorBoundary`)}
          </Typography>
          <Typography variant="h4">{error.message}</Typography>
        </Box>
        <Button
          variant="outlined"
          onClick={() => {
            resetErrorBoundary();
          }}
        >
          {t('errorButton')}
        </Button>
      </Grid>
    </Grid>
  );
};

export const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return <ErrorComponent FallbackComponent={FallbackError}>{children}</ErrorComponent>;
};
