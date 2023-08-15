import React, { useContext } from 'react';
import { ThemeContext } from './Theme';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Icon from '@mui/icons-material/Face3TwoTone';

// Array of page names for the navigation menu
const pages = ['About', 'Experience', 'Projects', 'Contact'];

// Component for the responsive app bar
function ResponsiveAppBar() {
  const theme = useContext(ThemeContext);

  // State to manage the anchor element of the navigation menu
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  // Event handler to open the navigation menu
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // Event handler to close the navigation menu
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: theme.colors.blossom, width: '100vw' }}>
        <Toolbar disableGutters sx={{ backgroundColor: theme.colors.peach, borderRadius: '25px', margin: '1rem', maxWidth: '100%', padding: '0 3rem'}}>
          {/* Logo and title */}
          <Icon sx={{ display: { xs: 'none', md: 'flex', fontSize: '2.6rem' }, padding: '1rem', color: theme.colors.peacock }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: theme.typography.logoFont,
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              fontSize: '2rem'
            }}
          >
            <span style={{ color: theme.colors.redhot }}>P</span>
            <span style={{ color: theme.colors.teal, }}>a</span>
            <span style={{ color: theme.colors.sunray }}>r</span>
            <span style={{ color: theme.colors.blossom }}>i</span>
            <span style={{ color: theme.colors.peacock }}>s</span>
            <span style={{ color: theme.colors.redhot }}>h</span>
            <span style={{ color: theme.colors.sunray }}>a</span>
          </Typography>

          {/* Navigation menu for small screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ color: theme.colors.sunray }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                "& .MuiMenu-paper":
                  { backgroundColor: '#edeae3', },
              }}
            >
              {/* Render each page as a menu item */}
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ backgroundColor: '#edeae3' }} >
                  <Typography textAlign="center" sx={{ color: [theme.colors.redhot, theme.colors.sunray, theme.colors.peacock][index % 3] }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo and title for small screens */}
          <Icon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: theme.colors.peacock }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'retro',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <span style={{ color: theme.colors.redhot }}>P</span>
            <span style={{ color: theme.colors.teal, }}>A</span>
            <span style={{ color: theme.colors.sunray }}>R</span>
            <span style={{ color: theme.colors.blossom }}>I</span>
            <span style={{ color: theme.colors.peacock }}>S</span>
            <span style={{ color: theme.colors.redhot }}>H</span>
            <span style={{ color: theme.colors.sunray }}>A</span>
          </Typography>

          {/* Navigation buttons for medium and large screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {/* Render each page as a button */}
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: [theme.colors.redhot, theme.colors.sunray, theme.colors.peacock][index % 3], // Add color values for each index
                  display: 'block',
                  fontSize: '1rem'
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
