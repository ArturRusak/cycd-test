import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
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
      <Button variant="outlined" onClick={handleOpenDialog}>
        {t('form:subscribe')}
      </Button>
      <FormDialog isOpen={isOpen} onClose={handleCloseDialog} />
    </PageLayout>
  );
};
