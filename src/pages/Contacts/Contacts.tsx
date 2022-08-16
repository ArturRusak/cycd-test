import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Typography } from '@mui/material';
import { PageLayout } from 'src/components';
import { FormDialog } from 'src/components/FormDialog';

export const Contacts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(['common', 'form']);

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  return (
    <PageLayout title={t('common:contacts')}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography mb={2}>{t('common:message')}</Typography>
        <Button sx={{ margin: 'auto auto' }} variant="outlined" onClick={handleOpenDialog}>
          {t('form:subscribe')}
        </Button>
      </Box>
      <FormDialog isOpen={isOpen} onClose={handleCloseDialog} />
    </PageLayout>
  );
};
