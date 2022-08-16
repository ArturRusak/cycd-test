import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { PageLayout } from 'src/components';
import { Subscriptions } from 'src/components/Subscriptions/Subscriptions';
import { useLocalStorage } from 'src/hooks';

export const Main = () => {
  const { t } = useTranslation('common');
  const [subscriptions, setSubscriptions] = useLocalStorage('subscription');
  const hasSubscriptions = subscriptions?.organization && subscriptions?.users.length;

  const resetSubscriptions = useCallback(() => setSubscriptions({}), [setSubscriptions]);

  return (
    <PageLayout title={t('mainTitle')}>
      <Box sx={{ textAlign: hasSubscriptions ? 'left' : 'center' }}>
        {hasSubscriptions ? (
          <Subscriptions
            organization={subscriptions.organization}
            users={subscriptions.users}
            onResetSubscriptions={resetSubscriptions}
          />
        ) : (
          <>
            <Typography mb={3} variant="h3">
              {t('helloWorld')}
            </Typography>
            <Button component={NavLink} to="/contacts" variant="contained">
              {t('contacts')}
            </Button>
          </>
        )}{' '}
      </Box>
    </PageLayout>
  );
};
