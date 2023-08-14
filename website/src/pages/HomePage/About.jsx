import React, { useContext } from 'react';
import { ThemeContext } from '../../components/Theme';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '../../assets/Parisha2.png'; // Import the Avatar image
import Button from '@mui/material/Button';
import './About.css'; // Create a CSS file for styling

// Array of words
const wordArray = ['Marketer', 'Developer', 'Singer', 'Dancer', 'Ukulele Player', 'Mentor', 'Problem Solver', 'Pizza Lover', 'Doggo Mother', 'Orator', 'Writer', "Avid Reader"]; // Add your 25 words here


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
        <Box sx={{ backgroundColor: 'white', paddingTop: '0.5rem' }}>
            <Container maxWidth="xl" sx={{ backgroundColor: theme.colors.midnight, borderRadius: '25px' }}>
                {/* Use the imported Avatar image */}
                <img
                    src={Avatar}
                    alt="Avatar"
                    style={{
                        width: '100%', // Make the width 100% to ensure responsiveness
                        maxWidth: '350px', // Set a max-width to avoid excessive stretching
                        height: 'auto', // Let the height adjust automatically
                        display: 'block', // Ensure proper spacing around the image
                        margin: '0 auto 10px', // Center the image and add margin
                        padding: '3rem'
                    }}
                />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    className="rotating-word" // Add a class name for styling
                    sx={{
                        mr: 2,
                        fontWeight: 600,
                        letterSpacing: '.1rem',
                        color: theme.colors.text,
                        textDecoration: 'none',
                    }}
                >
                    {wordArray[currentWordIndex]}
                </Typography>

            </Container>
        </Box>
    );
}

export default AboutParisha;
