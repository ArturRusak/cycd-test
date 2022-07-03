import { PageLayout } from 'src/components';
import { useTranslation } from 'react-i18next';

export const Contacts = () => {
  const { t } = useTranslation('common');
  return (
    <PageLayout title={t('contacts')}>
      <h2>Contacts</h2>
    </PageLayout>
  );
};
