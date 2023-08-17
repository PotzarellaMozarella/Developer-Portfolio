import React, { useContext } from 'react';
import { ThemeContext } from '../Theme';
import { Typography, Grid, Paper } from '@mui/material';
import { ReactComponent as HTMLIcon } from '../../assets/teckstack/html5-color.svg';
import { ReactComponent as CSSIcon } from '../../assets/teckstack/css3-color.svg';
import { ReactComponent as JSIcon } from '../../assets/teckstack/javascript-color.svg';
import { ReactComponent as ReactIcon } from '../../assets/teckstack/react-color.svg';
import { ReactComponent as ReduxIcon } from '../../assets/teckstack/redux-color.svg';
import { ReactComponent as NextJSIcon } from '../../assets/teckstack/nextdotjs.svg';
import { ReactComponent as NodeJSIcon } from '../../assets/teckstack/nodedotjs-color.svg';
import { ReactComponent as ExpressJSIcon } from '../../assets/teckstack/express.svg';
import { ReactComponent as MongoDBIcon } from '../../assets/teckstack/mongodb-color.svg';
import { ReactComponent as MySQLIcon } from '../../assets/teckstack/mysql-color.svg';
import { ReactComponent as MongooseIcon } from '../../assets/teckstack/mongoose-color.svg';
import { ReactComponent as MaterialUIIcon } from '../../assets/teckstack/mui-color.svg';
import { ReactComponent as BootstrapIcon } from '../../assets/teckstack/bootstrap-color.svg';
import { ReactComponent as VercelIcon } from '../../assets/teckstack/vercel.svg';
import { ReactComponent as NetlifyIcon } from '../../assets/teckstack/netlify-color.svg';
import styled from 'styled-components';
import Box from '@mui/material/Box';

const techStackData = [
    { name: 'HTML5', icon: <HTMLIcon /> },
    { name: 'CSS3', icon: <CSSIcon /> },
    { name: 'Javascript', icon: <JSIcon /> },
    { name: 'React', icon: <ReactIcon /> },
    { name: 'Redux', icon: <ReduxIcon /> },
    { name: 'Next.js', icon: <NextJSIcon /> },
    { name: 'Node.js', icon: <NodeJSIcon /> },
    { name: 'Express.js', icon: <ExpressJSIcon /> },
    { name: 'MongoDB', icon: <MongoDBIcon /> },
    { name: 'MySQL', icon: <MySQLIcon /> },
    { name: 'Mongoose', icon: <MongooseIcon /> },
    { name: 'Material-UI', icon: <MaterialUIIcon /> },
    { name: 'Bootstrap', icon: <BootstrapIcon /> },
    { name: 'Vercel', icon: <VercelIcon /> },
    { name: 'Netlify', icon: <NetlifyIcon /> },
];


const MainContainer = styled(Box)`
  padding: 0.5rem 0;
`;

const ProjectsContainer = styled(Box)`
  border-radius: 25px;
  margin: 0 1rem;
  padding: 2rem 4rem;
  display: flex;
  justify-content: center;
`;

const TechItemContainer = styled.div`
  background-color: ${props => props.bgColor};
  padding: 1rem;
  border-radius: 10px;
  width: 5rem; 
  margin: 0.5rem;
`;

function TechStack() {
    const theme = useContext(ThemeContext);

    return (
        <MainContainer sx={{ backgroundColor: theme.colors.secondary }}>
            <ProjectsContainer sx={{ backgroundColor: theme.colors.text }}>
                <Paper elevation={0} style={{ padding: '2rem', backgroundColor: theme.colors.text }}>
                    <Typography variant="h3" gutterBottom style={{ textAlign: 'center', color: theme.colors.secondary, fontFamily: theme.typography.logoFont }}>
                        Tech Stack
                    </Typography>
                    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ paddingTop: '3rem' }}>
                        {techStackData.map((tech, index) => (
                            <Grid key={index} item xs={6} sm={4} md={3} lg={2} sx={{ textAlign: 'center' }}>
                                <TechItemContainer bgColor={theme.colors.blossom}>
                                    {tech.icon}
                                    <Typography variant="body2" style={{ marginTop: '0.5rem', color: theme.colors.midnight }}>
                                        {tech.name}
                                    </Typography>
                                </TechItemContainer>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </ProjectsContainer>
        </MainContainer>
    );
}

export default TechStack;
