import { Grid, Typography } from '@mui/material';

interface FooterProps {
  title?: string;
}

export const Footer = ({ title }: FooterProps) => {
  return (
    <Grid
      container
      component="footer"
      sx={({ palette }) => ({
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        background: palette.primary.main,
      })}
    >
      {title && (
        <Typography sx={{ color: '#fff', fontSize: '18px' }} variant="h3">
          {title}
        </Typography>
      )}
    </Grid>
  );
};
