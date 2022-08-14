import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import FlagIcon from '@mui/icons-material/Flag';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';

export const TopNavigation = () => {
  const { t } = useTranslation('common');
  const navItems = useMemo(
    () => [
      {
        title: t('about'),
        url: '/about',
      },
      {
        title: t('contacts'),
        url: '/contacts',
      },
    ],
    [t]
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center' }} onClick={handleDrawerToggle}>
      <Typography variant="h6">GGG</Typography>
      <Divider />
      <List>
        {navItems.map(({ title, url }) => (
          <ListItem key={title} disablePadding>
            <ListItemButton component={NavLink} sx={{ textAlign: 'center' }} to={url}>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <Toolbar disableGutters>
          <IconButton
            aria-label="open drawer"
            color="inherit"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexDirection: 'row', alignItems: 'center', flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            <Typography variant="h6">GGG</Typography>
            <FlagIcon htmlColor="yellow" />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(({ url, title }) => (
              <Button key={title} component={NavLink} sx={{ color: '#fff', '&.active': { color: 'yellow' } }} to={url}>
                {title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Box>
      <Box component="nav">
        <Drawer
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          open={mobileOpen}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
          variant="temporary"
          onClose={handleDrawerToggle}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};
