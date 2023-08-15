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
import projects from './ProjectArray'; // Import the projects array from the file

const MainContainer = styled(Box)`
  padding: 0.5rem 0;
`;

const ProjectsContainer = styled(Box)`
  border-radius: 25px;
  margin: 0 1rem;
  display: flex;
  padding-left: 4rem;
  flex-wrap: wrap; /* Added flex-wrap property */
  justify-content: center; /* Center align items horizontally */

  @media (max-width: 900px) {
    flex-direction: column; 
    align-items: center;
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
 padding: 2rem;
 font-weight: 900;
`;

const ProjectCard = styled(Card)`
  margin: 2rem;
  width: 20rem;
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
                    {projects.map((project, index) => (
                        <ProjectCard key={index}>
                            <CardMedia
                                sx={{ height: 250 }}
                                image={project.image} 
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
            </ProjectsContainer>
        </MainContainer>
    );
}


export default Projects;
