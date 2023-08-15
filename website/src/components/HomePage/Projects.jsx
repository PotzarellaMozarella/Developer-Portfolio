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
import projects from '../Projects/ProjectArray'; // Import the projects array from the file
import { Link } from 'react-router-dom';

const MainContainer = styled(Box)`
  padding: 0.5rem 0;
`;

const ProjectsContainer = styled(Box)`
  border-radius: 25px;
  margin: 0 1rem;
  padding-left: 4rem;
  padding-bottom: 2rem;
  @media (max-width: 900px) {
    padding-left: 0;
  }
`;

const InnerContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap; /* Added flex-wrap property */
  justify-content: center; /* Center align items horizontally */
  @media (max-width: 900px) {
    flex-direction: column; 
    align-items: center;
  }
`;

const Heading = styled(Typography)`
 text-align: center;
 padding: 2rem;
 font-weight: 900;
`;

const ProjectCard = styled(Card)`
  margin: 2rem;
  width: 20rem;
`;

const KnowMore = styled(Button)`
  display: block;
  padding-bottom: 0.5rem;
  margin: 2rem;
  width: 10rem;
`;

// Component for the responsive app bar
function Projects() {
    const theme = useContext(ThemeContext);

    return (
        <MainContainer sx={{ backgroundColor: theme.colors.blossom }}>
            <ProjectsContainer sx={{ backgroundColor: theme.colors.peacock }}>
                <Heading
                    variant="h1"
                    sx={{ color: theme.colors.blossom, fontFamily: theme.typography.headingFont, fontSize: '2rem', fontWeight: '700' }}>
                    Development Projects
                </Heading>
                <InnerContainer>
                    {projects.slice(0, 3).map((project, index) => (
                        <ProjectCard key={index}>
                            <CardMedia
                                sx={{ height: 250 }}
                                image={project.image || "/static/images/default-image.jpg"} // Use a default image if no image is provided
                                title={project.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project.name}
                                </Typography>
                                {project.about && (
                                    <Typography variant="body2" color="text.secondary">
                                        {project.about}
                                    </Typography>
                                )}
                            </CardContent>
                            <CardActions>
                                {project.link && (
                                    <Button size="small" href={project.link} target="_blank">
                                        Visit Website
                                    </Button>
                                )}
                                {project.github && (
                                    <Button size="small" href={project.github} target="_blank">
                                        GitHub
                                    </Button>
                                )}
                            </CardActions>
                        </ProjectCard>
                    ))}
                </InnerContainer>
                <KnowMore
                    component={Link} // Use the Link component
                    to={`/projects`} // Set the path based on the page name
                    variant="contained"
                    size="medium"
                    sx={{
                        backgroundColor: theme.colors.blossom,
                        color: theme.colors.redhot,
                        fontWeight: '550',
                        margin: '1rem auto', 
                        display: 'block',
                    }}
                >
                    More Projects
                </KnowMore>
            </ProjectsContainer>
        </MainContainer>
    );
}


export default Projects;
