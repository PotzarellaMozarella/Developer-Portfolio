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
 text-align: center;
`;

const ProjectCard = styled(Card)`
  margin: 2rem;
  width: 20rem;
`;

// Component for the responsive app bar
function Projects() {
    const theme = useContext(ThemeContext);

    return (
        <MainContainer sx={{ backgroundColor: theme.colors.text }}>

            <ProjectsContainer>
                <Heading
                    variant="h3"
                    sx={{ color: theme.colors.secondary, paddingBottom: '2rem', fontFamily: theme.typography.logoFont }}>
                    Development Projects
                </Heading>
                <InnerContainer>
                    {projects.map((project, index) => (
                        <ProjectCard key={index}>
                            <CardMedia
                                sx={{ height: 250, backgroundColor: theme.colors.quaternary }}
                                image={project.image}
                                title={project.name}
                            />
                            <CardContent sx={{
                                backgroundColor: theme.colors.secondary,
                                color: theme.colors.text
                            }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project.name}
                                </Typography>
                                {project.about && (
                                    <Typography variant="body2" >
                                        {project.about}
                                    </Typography>
                                )}
                            </CardContent>
                            <CardActions sx={{
                                backgroundColor: theme.colors.primary
                            }}>
                                {project.link && (
                                    <Button size="small" href={project.link} target="_blank"
                                        sx={{
                                            color: theme.colors.text,
                                            '&:hover': {
                                                color: theme.colors.secondary,
                                            },
                                        }}>
                                        Visit Website
                                    </Button>
                                )}
                                {project.github && (
                                    <Button size="small" href={project.github} target="_blank" 
                                    sx={{
                                            color: theme.colors.text,
                                            '&:hover': {
                                                color: theme.colors.secondary,
                                            },
                                        }}>
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
