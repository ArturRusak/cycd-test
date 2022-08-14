import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Close } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Checkbox,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Radio,
  SxProps,
} from '@mui/material';
import type { Theme } from '@mui/material/styles';
import db from 'src/db.json';
import { Organization, User } from 'src/types';
import * as yup from 'yup';

import { ControlledAutocomplete } from '../inputs';
import VirtualizedAutocomplete from '../inputs/VirtualizedAutocomplete';

interface FormDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const closeBtnStyles: SxProps<Theme> = {
  position: 'absolute',
  right: 8,
  top: 8,
};

const useSchema = () => {
  const { t } = useTranslation('form');
  return yup
    .object()
    .shape({
      organization: yup.mixed().required(t('required')),
      users: yup.mixed().required(t('required')),
    })
    .required();
};

export const FormDialog = ({ isOpen, onClose }: FormDialogProps) => {
  const { t } = useTranslation('form');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { control, handleSubmit, watch, setValue, formState } = useForm({
    resolver: yupResolver(useSchema()),
  });

  const companyValue = watch('organization');
  const usersValue = watch('users');

  const optimizedList = useMemo(() => {
    return db.users.filter(({ organizationId }) => organizationId === companyValue?.id);
  }, [companyValue]);

  useEffect(() => {
    if (usersValue) {
      setValue('users', null);
    }
  }, [companyValue]);

  const submitForm = (data: any) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('subscription', JSON.stringify(data));
      onClose();
      navigate('/about');
    }, 3000);
  };

  return (
    <>
      <Dialog
        PaperProps={{
          sx: {
            py: 2,
          },
        }}
        open={isOpen}
        onClose={onClose}
      >
        <DialogTitle align="center">
          {t('subscribe')}
          <IconButton aria-label="close" sx={closeBtnStyles} onClick={onClose}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText mb={2}>To subscribe to this website, please choose something.</DialogContentText>
          <form onSubmit={handleSubmit(submitForm)}>
            <ControlledAutocomplete<Organization>
              fullWidth
              control={control}
              getOptionLabel={(option) => option?.name || ''}
              label={t('organization')}
              name="organization"
              options={db.organizations}
              renderOption={(props, option, { selected }) => (
                <li {...props} key={option?.id}>
                  <FormControlLabel
                    checked={selected}
                    control={<Radio />}
                    label={option?.name}
                    style={{ marginRight: 8 }}
                    value={option?.id}
                  />
                </li>
              )}
            />
            <br />
            <VirtualizedAutocomplete<User>
              fullWidth
              control={control}
              disabled={!companyValue}
              getOptionLabel={(option) => option?.firstName || ''}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              label={t('users')}
              name="users"
              options={optimizedList}
              renderOption={(props, option, { selected }) => (
                <li {...props} key={option?.id}>
                  <Checkbox checked={selected} />
                  {option.firstName}
                </li>
              )}
            />
            <br />
            <Box textAlign="center">
              <LoadingButton aria-label="submit-button" loading={isLoading} type="submit" variant="outlined">
                {t('subscribe')}
              </LoadingButton>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
