import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { PageLayout } from 'src/components';

export const About = () => {
  const { t } = useTranslation('common');
  return (
    <PageLayout title={t('about')}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography mb={3} variant="h3">
          {t('helloWorld')}
        </Typography>
        <Button component={NavLink} to="/contacts" variant="contained">
          {t('contacts')}
        </Button>
      </Box>
    </PageLayout>
  );
};
