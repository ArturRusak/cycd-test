import { useTranslation } from 'react-i18next';
import { PageLayout } from 'src/components';

export const About = () => {
  const { t } = useTranslation('common');
  return (
    <PageLayout title={t('about')}>
      <h1>TEst</h1>
    </PageLayout>
  );
};
