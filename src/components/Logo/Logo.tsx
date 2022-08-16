import { NavLink } from 'react-router-dom';
import FlagIcon from '@mui/icons-material/Flag';
import { type SxProps, Typography } from '@mui/material';
import type { Theme } from '@mui/material/styles';

const logoStyles: SxProps<Theme> = { textDecoration: 'none', color: 'primary.light' };

export const Logo = () => (
  <Typography component={NavLink} sx={logoStyles} to={'/main'} variant="h6">
    GGG <FlagIcon htmlColor="yellow" />
  </Typography>
);
