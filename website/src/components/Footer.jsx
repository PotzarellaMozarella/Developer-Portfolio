import React, { useContext } from 'react';
import { ThemeContext } from './Theme';
import { Typography, Link, Box, Grid, SvgIcon } from '@mui/material';
import styled from 'styled-components';
import githubImage from '../assets/github.png';
import linkedinImage from '../assets/linkedin.png';
import mediumImage from '../assets/medium.png';

const MainContainer = styled(Box)`
  padding: 0.5rem 0 1.5rem;
`;

const ProjectsContainer = styled(Box)`
  border-radius: 25px;
  margin: 1rem;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Footer = () => {
    const theme = useContext(ThemeContext);

    return (
        <MainContainer sx={{ backgroundColor: theme.colors.secondary }}>
            <ProjectsContainer sx={{ backgroundColor: theme.colors.quaternary }}>
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
                        <span style={{ color: theme.colors.text }}>Parisha</span>
                    </Typography>
                </Box>
                <Box justifyContent="space-around" textAlign="center">
                    <nav>
                        <Link href="/" variant="h6" color={theme.colors.text} sx={{ marginRight: 2, textDecoration: "none" }}>
                            Home
                        </Link>
                        <Link href="/about" variant="h6" color={theme.colors.text} sx={{ marginRight: 2, textDecoration: "none" }}>
                            About
                        </Link>
                        <Link href="/contact" variant="h6" color={theme.colors.text} sx={{ textDecoration: "none" }}>
                            Contact
                        </Link>
                    </nav>
                </Box>
                <Box display="flex" justifyContent="center" paddingTop="1rem" >
                    <a href="https://github.com/PotzarellaMozarella" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }}>
                        <img src={githubImage} alt="GitHub" width="30" height="30" />
                    </a>
                    <a href="https://www.linkedin.com/in/parishap/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }}>
                        <img src={linkedinImage} alt="LinkedIn" width="30" height="30" />
                    </a>
                    <a href="https://medium.com/@parisha.workshop" target="_blank" rel="noopener noreferrer">
                        <img src={mediumImage} alt="Medium" width="30" height="30" />
                    </a>
                </Box>
                <Typography variant="body2" color={theme.colors.text} fontFamily={theme.typography.bodyFont} align="center" mt={2}>
                    &copy; {new Date().getFullYear()} Parisha's Website. All rights reserved.
                </Typography>
            </ProjectsContainer>
        </MainContainer>
    );
};

export default Footer;
