import { useTranslation } from 'react-i18next';
import { Button, Typography } from '@mui/material';
import type { Organization, User } from 'src/types';

interface SubscriptionsProps {
  organization: Organization;
  users: User[];
  onResetSubscriptions: (val: any) => void;
}

export const Subscriptions = ({ organization, users, onResetSubscriptions }: SubscriptionsProps) => {
  const { t } = useTranslation('common');

  return (
    <>
      <Typography textAlign="center" variant="h5">
        {t('subscriptions')}
      </Typography>
      <Typography fontWeight={600}>
        {`${t('organization')} `}
        <span style={{ fontSize: '20px', fontStyle: 'italic' }}>{organization?.name}</span>
      </Typography>
      <Typography fontWeight={600}>{t('users')}</Typography>
      <ul>
        {users &&
          users.map(({ firstName, lastName, id }: any) => (
            <li key={id}>
              <Typography>{`${firstName} ${lastName}`}</Typography>
            </li>
          ))}
      </ul>
      <Button variant="outlined" onClick={onResetSubscriptions}>
        {t('removeSubscriptions')}
      </Button>
    </>
  );
};
