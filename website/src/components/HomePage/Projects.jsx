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
import projects from '../Projects/ProjectArray';
import { Link } from 'react-router-dom';

const MainContainer = styled(Box)`
  padding: 0.5rem 0;
`;

const ProjectsContainer = styled(Box)`
  border-radius: 25px;
  margin: 1rem;
  padding-bottom: 2rem;
  @media (max-width: 900px) {
    padding-left: 0;
  }
`;

const InnerContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
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
        <MainContainer sx={{ backgroundColor: theme.colors.secondary }}>
            <ProjectsContainer sx={{ backgroundColor: theme.colors.text }}>
                <Heading
                    variant="h3"
                    sx={{ color: theme.colors.secondary, fontFamily: theme.typography.logoFont }}>
                    Development Projects
                </Heading>
                <InnerContainer>
                    {projects.slice(0, 3).map((project, index) => (
                        <ProjectCard key={index}>
                            <CardMedia
                                sx={{ height: 250, backgroundColor: theme.colors.quaternary }}
                                image={project.image} // Use a default image if no image is provided
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
                                    <Typography variant="body2">
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
                <KnowMore
                    component={Link} 
                    to={`/projects`} 
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
