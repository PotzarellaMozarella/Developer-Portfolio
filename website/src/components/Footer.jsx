import React, { useContext } from 'react';
import { ThemeContext } from './Theme';
import { Typography, Link, Box, Grid, SvgIcon } from '@mui/material';
import styled from 'styled-components';
import Icon from '@mui/icons-material/Face3TwoTone';

const MainContainer = styled(Box)`
  padding: 0.5rem 0 1.5rem;
`;

const ProjectsContainer = styled(Box)`
  border-radius: 25px;
  margin: 0 1rem;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Footer = () => {
    const theme = useContext(ThemeContext);

    return (
        <MainContainer sx={{ backgroundColor: theme.colors.blossom }}>
            <ProjectsContainer sx={{ backgroundColor: theme.colors.peach }}>
                <Box justifyContent="center" display="flex" paddingBottom="1rem">
                    <Typography
                        variant="h6"
                        noWrap
                        component="span"
                        href="/"
                        sx={{
                            display: 'flex',
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
                </Box>
                <Box justifyContent="space-around" textAlign="center">
                    <nav>
                        <Link href="#" variant="body1" color={theme.colors.sunray} sx={{ marginRight: 2, textDecoration:"none" }}>
                            Home
                        </Link>
                        <Link href="#" variant="body1" color={theme.colors.peacock} sx={{ marginRight: 2, textDecoration:"none" }}>
                            About
                        </Link>
                        <Link href="#" variant="body1" color={theme.colors.redhot} sx={{ textDecoration:"none" }}>
                            Contact
                        </Link>
                    </nav>
                </Box>
                <Box display="flex">
                    <Link href="#" color="textSecondary" sx={{ marginRight: 2 }}>
                        {/* Replace with your social media icon */}
                        <SvgIcon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                {/* Your social media SVG icon here */}
                            </svg>
                        </SvgIcon>
                    </Link>
                    <Link href="#" color="textSecondary">
                        {/* Replace with another social media icon */}
                        <SvgIcon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                {/* Another social media SVG icon here */}
                            </svg>
                        </SvgIcon>
                    </Link>
                </Box>
                <Typography variant="body2" color={theme.colors.peacock} align="center" mt={2}>
                    &copy; {new Date().getFullYear()} Parisha's Website. All rights reserved.
                </Typography>
            </ProjectsContainer>
        </MainContainer>
    );
};

export default Footer;
