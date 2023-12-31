import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { ThemeContext } from '../Theme';
import { useContext } from 'react';
import styled from 'styled-components';

const MainContainer = styled(Box)`
  padding: 0.5rem 0;
`;

const ContactContainer = styled(Box)`
  border-radius: 25px;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 55vh;
  @media (max-width: 900px) {
    align-items: center;
  }
`;

const Heading = styled(Typography)`
  padding: 3rem 2rem;
  font-weight: 900;
`;

const ContactForm = () => {
  const theme = useContext(ThemeContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = 'parisha.workshop@gmail.com';
    window.location.href = `mailto:${email}`;
  };

  return (
    <MainContainer sx={{ backgroundColor: theme.colors.text }}>
      <ContactContainer sx={{ backgroundColor: theme.colors.text }}>
        <Heading
          variant="h3"
          sx={{ color: theme.colors.secondary, fontFamily: theme.typography.logoFont }}>
          Contact Me
        </Heading>
        <Typography variant="body1" sx={{ textAlign: 'center', color: theme.colors.peach, padding: '1rem' }}>
          Feel free to reach out to me at parisha.workshop@gmail.com for any queries or click below to send an email.
        </Typography>
        <form onSubmit={handleSubmit} style={{ margin: '0 auto', width: '70%', padding: '2rem' }}>
          <Button
            type="submit"
            variant="contained"
            size="medium"
            sx={{
              backgroundColor: theme.colors.secondary,
            color: theme.colors.text,
            fontWeight: '550',
            '&:hover': {
              backgroundColor: theme.colors.text,
              color: theme.colors.secondary,
            },
            '&:focus': {
              backgroundColor: theme.colors.text,
              color: theme.colors.secondary,
            },
            '&:active': {
              backgroundColor: theme.colors.text,
              color: theme.colors.secondary,
            },
            }}>
            Send Email
          </Button>
        </form>
      </ContactContainer>
    </MainContainer>
  );
};

export default ContactForm;
