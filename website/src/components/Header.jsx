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
import { Link } from 'react-router-dom';


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
    <AppBar position="static" elevation={0} sx={{ backgroundColor: theme.colors.secondary, width: '100vw' }}>
      <Toolbar disableGutters sx={{ backgroundColor: theme.colors.tertiary, borderRadius: '25px', margin: '1rem', maxWidth: '100%', padding: '0 3rem' }}>
        {/* Logo */}
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
          <span style={{ color: theme.colors.text }}>Parisha</span>
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
              <MenuItem
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ backgroundColor: '#edeae3' }}
                component={Link}
                to={`/${page.toLowerCase()}`} 
              >
                <Typography textAlign="center" sx={{ color: theme.colors.secondary, fontFamily: theme.typography.bodyFont, }}>
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Logo and title for small screens */}
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: theme.typography.logoFont,
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          <span style={{ color: theme.colors.text }}>Parisha</span>
        </Typography>

        {/* Navigation buttons for medium and large screens */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
          {/* Render each page as a button */}
          {pages.map((page, index) => (
            <Button
              key={page}
              component={Link} 
              to={`/${page.toLowerCase()}`} // Set the path based on the page name
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: theme.colors.text,
                fontFamily: theme.typography.bodyFont,
                display: 'block',
                fontSize: '1rem',
                textDecoration: 'none' 
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
