import React, { useContext } from 'react';
import { ThemeContext } from '../Theme';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '../../assets/photo.png';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const MainContainer = styled(Box)`
  padding: 1rem 0 0.5rem;
`;

const AvatarContainer = styled(Box)`
  border-radius: 25px;
  margin: 0 1rem;
  display: flex;
  padding-left: 4rem;
  @media (max-width: 900px) {
    flex-direction: column; 
    align-items: center;
    padding-left: 0;
  }
`;

const TextContainer = styled(Box)`
display: flex;
  width: 100%;
  text-align: center;
  align-self: center;
  text-decoration: none;
  padding-right: 5rem;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 900px) {
    padding: 2rem 4rem;
  }
`;

const Text = styled(Typography)`
  padding-top: 1rem;
  padding-bottom: 1rem; 
`;

const Bio = styled(Typography)`
  text-decoration: none;
  font-weight: 300; 
  font-size: 1.2rem;
  padding: 0.5rem 0; 
  @media (max-width: 900px) {
    padding: 0 4rem;
  }
`;

const AvatarImage = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
  display: block;
  padding: 3rem 3rem 3rem 5rem;
  @media (max-width: 900px) {
    justify-self: center;
    padding: 1rem;
    max-width: 250px;
  }
`;

const KnowMore = styled(Button)`
  align-self: center;
  padding-bottom: 0.5rem;
  width: 10rem;
`;

// Array of words
const wordArray = ['Digital Marketer',
  'MERN Stack Developer',
  'Aspiring Singer',
  'Energetic Dancer',
  'Amateur Ukulele Player',
  'Friendly Mentor',
  'Innovative Problem Solver',
  'Pizza Lover',
  'Proud Doggo Mother',
  'Eloquent Orator',
  'Creative Writer',
  'Avid Reader',
  'Passenger Seat Occupier',
  'Rowing Enthusiast',
  'Curious Learner']; // Add your 25 words here

const bioTextArray = [
  "🚀 Recently forayed into MERN Stack development. 8yrs spanning E-commerce, Fintech, Apparel, Edtech, SaaS.",
  "Transformed brands, 2cr+ revenue, 100+ brand campaigns, vibrant interfaces.",
  "Geek-speak translator, problem-solving maestro, design virtuoso.",
  "Let's code the quirky way! 🌟",
];

// Component for the responsive app bar
function AboutParisha() {
  const theme = useContext(ThemeContext);
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);

  const cycleWords = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordArray.length);
  };

  React.useEffect(() => {
    const intervalId = setInterval(cycleWords, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <MainContainer sx={{ backgroundColor: theme.colors.secondary }}>
      <AvatarContainer sx={{ backgroundColor: theme.colors.primary }}>
        {/* Use the imported Avatar image */}
        <AvatarImage src={Avatar} alt="Avatar" />
        <TextContainer>
          {bioTextArray.map((text, index) => (
            <Bio
              key={index}
              sx={{ fontFamily: theme.typography.headingFont, color: theme.colors.secondary, }}
            >
              {text}
            </Bio>
          ))}
          <Text
            variant="h3"
            component="p"
            sx={{ color: theme.colors.secondary, fontFamily: theme.typography.logoFont }}
          >
            {wordArray[currentWordIndex]}
          </Text>
          <KnowMore variant="contained" size="medium"
            component={Link} 
            to={`/about`}
            sx={{
              backgroundColor: theme.colors.text,
              color: theme.colors.secondary,
              fontWeight: '550',
              '&:hover': {
                backgroundColor: theme.colors.secondary,
                color: theme.colors.text,
              },
              '&:focus': {
                backgroundColor: theme.colors.secondary,
                color: theme.colors.text,
              },
              '&:active': {
                backgroundColor: theme.colors.secondary,
                color: theme.colors.text,
              },
            }}>
            Know more
          </KnowMore>
        </TextContainer>
      </AvatarContainer>
    </MainContainer>
  );
}

export default AboutParisha;
