import React, { useContext } from 'react';
import { ThemeContext } from '../Theme';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const MainContainer = styled(Box)`
  padding: 0.5rem 0;
`;

const ProjectsContainer = styled(Box)`
  border-radius: 25px;
  margin: 0 1rem;
  display: flex;
  flex-wrap: wrap; /* Added flex-wrap property */
  justify-content: center; /* Center align items horizontally */
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const InnerContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap; /* Added flex-wrap property */
  justify-content: center; /* Center align items horizontally */
  padding: 2rem 12rem;
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: center;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem 4rem;
  }
`;

const Heading = styled(Typography)`
  padding: 2rem;
  font-weight: 900;
`;

const AboutMe = () => {
    const theme = useContext(ThemeContext);

    return (
        <MainContainer sx={{ backgroundColor: theme.colors.blossom }}>
            <ProjectsContainer sx={{ backgroundColor: theme.colors.peacock }}>
                <Heading
                    variant="h1"
                    sx={{
                        color: theme.colors.blossom,
                        fontFamily: theme.typography.headingFont,
                        fontSize: '2rem',
                        fontWeight: '700',
                        textAlign: 'center'
                    }}
                >
                    Hey there, curious minds and digital explorers! 🚀
                </Heading>
                <InnerContainer sx={{ color: theme.colors.peach }}>
                    <Typography variant="body1" sx={{ textAlign: 'center' }}>
                        I'm Parisha, a self-proclaimed 'recently-forayed-into-being-a-developer'
                        individual who's not afraid to add a pinch of quirk to the world of
                        coding and problem-solving. With a journey that started in the world of
                        E-commerce and stretched across a colorful spectrum of Fintech, Apparel,
                        Edtech, SaaS, and other digital terrains, I've gleefully worn leadership
                        hats and embraced challenges that would make even the bravest of developers
                        raise an eyebrow.
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', mt: 2 }}>
                        Having spent a whopping 8 years navigating the ever-evolving digital
                        landscape, I've wrangled data, danced with pixels, and serenaded the
                        ones and zeroes to craft user experiences that resonate and convert.
                        With quantifiers that make Excel spreadsheets swoon - think over 2 crore
                        in revenue, collaborations with 100+ brands, and orchestrating digital
                        symphonies that resonated across platforms - I've left my digital
                        footprints in spaces where clicks translate into sales.
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', mt: 2 }}>
                        But that's not all, folks. My journey isn't just a mad dash for numbers; it's a celebration of communication and collaboration. As I waltzed across the digital floor, I've mastered the art of translating geeky tech-speak into friendly conversations. Problem-solving? It's not just my forte; it's my morning coffee. From cross-functional powwows to brainstorming sessions that sound like jazz ensembles, I've got an uncanny knack for weaving together diverse minds into digital tapestries that are both creative and cohesive.

                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', mt: 2 }}>
                        Speaking of creativity, did I mention my design skills? They're not just hidden away in a secret compartment; I've unleashed them to create interfaces that capture the essence of brands with the finesse of a maestro. Every pixel I place is a nod to the brand's unique style, making the digital world an even more vibrant place to explore.
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', mt: 2 }}>
                        So, if you're looking for someone who's part developer, part digital virtuoso, and 100% ready to craft experiences that are as user-friendly as they are imaginative, you've found your partner in quirky crime. Let's code, create, and quirkify the digital universe together! 🌟"
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', mt: 2 }}>
                        Yours quirkily,
                        Parisha 🎩🎉"

                    </Typography>
                </InnerContainer>
            </ProjectsContainer>
        </MainContainer>
    );
};

export default AboutMe;

