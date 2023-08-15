import React, { useContext } from 'react';
import { ThemeContext } from '../../components/Theme';
import styled from 'styled-components'; // Import styled-components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '../../assets/1.png'; // Import the Avatar image
import Button from '@mui/material/Button';

const MainContainer = styled(Box)`
  padding-bottom: 0.5rem;
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
  width: 100%;
  text-align: center;
  align-self: center;
  text-decoration: none;
  padding-right: 5rem;
  @media (max-width: 900px) {
    padding: 2rem 4rem;
  }
`;

const Text = styled(Typography)`
  text-decoration: none;
  padding-top: 1rem; /* Add padding above the Text component */
    padding-bottom: 1rem; /* Add padding below the Text component */
  @media (max-width: 900px) {
    
  }
`;

const Bio = styled(Typography)`
  text-decoration: none;
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
    max-width: 250px; /* Adjust the max-width for smaller screens */
  }
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

const bio = "🚀 Recently forayed into development. 8yrs spanning E-commerce, Fintech, Apparel, Edtech, SaaS. Transformed brands, 2cr+ revenue, 100+ brand campaigns, vibrant interfaces. Geek-speak translator, problem-solving maestro, design virtuoso. Let's code the quirky way! 🌟";
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
        <MainContainer sx={{ backgroundColor: theme.colors.blossom }}>
            <AvatarContainer sx={{ backgroundColor: theme.colors.peacock }}>
                {/* Use the imported Avatar image */}
                <AvatarImage src={Avatar} alt="Avatar" />
                <TextContainer>
                    <Bio sx={{ color: theme.colors.peach }}>
                        {bio}
                    </Bio>
                    <Text
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        className="rotating-word" // for styling
                        sx={{ color: theme.colors.peach }}
                    >
                        {wordArray[currentWordIndex]}
                    </Text>
                </TextContainer>
            </AvatarContainer>
        </MainContainer>
    );
}

export default AboutParisha;
