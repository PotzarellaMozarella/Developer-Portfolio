import React, { useContext } from 'react';
import { ThemeContext } from '../Theme';
import { Typography, Box, Paper } from '@mui/material';
import styled from 'styled-components';

const ResumeContainer = styled(Box)`
  padding: 2rem;
`;

const Section = styled(Paper)`
  padding: 1rem;
  margin-bottom: 1rem 1.5rem;
`;

const Heading = styled(Typography)`
  text-align: center;
  font-weight: 900;
`;

const WorkExperience = () => {
    const theme = useContext(ThemeContext);
    const workExperienceData = [
        {
            company: 'Multiple Organisations',
            role: 'Consultant',
            duration: 'June 2021 - Present · 2 yrs 8 mos',
            about: 'Worked with various organisations like Lets Influence & Rusk Media as a freelance marketing & brand partnerships consultant.',
            details: [
                'Built a sales pipeline with 500+ clients, driving a 4x increase in monthly revenue.',
                'Generated INR 20Mn+ in added revenue through strategic brand partnerships.',
                'Led partnership deals with renowned brands such as ITC, Unacademy, Flipkart, DilMil, Healthkart, Times Prime, Pepperfry, FreshToHome, InstaMojo, SliceIt & more.',
                'Contributed 60-80% of the monthly revenue at Lets Influence, Gurgaon.',
            ],
            skills: 'Communication · Client Relationship Management · Problem-Solving · Team Collaboration',
        },
        {
            company: 'Unacademy',
            role: 'Senior Category Leader, K12 Business Team',
            duration: 'Nov 2020 - Dec 2020 · 2 mos',
            about: 'Unacademy is an educational technology company that prepares students for various competitive exams, as well as provides content on foundational and skill building courses.',
            details: [
                'Spearheaded growth and acquisition for K12 business, optimizing channels and exploring new strategies, resulting in a 10% increase in user base.',
                'Led cross-functional teams for the Youtube, Marketing & Promotions, and Design functions, achieving a 20% improvement in collaboration efficiency.',
                'Orchestrated online digital events, including test prep series and career counseling, drawing 10k+ attendees and achieving a 1.5Mn+ reach.',
                'Developed data-driven approach, delivering 20% growth in key performance indicators (KPIs) within the quarter.',
                'Strategically enhanced category revenue, devising initiatives that led to a 5% increase in monthly profits.',
            ],
            skills: 'Team Management · Marketing Strategy · Digital Marketing',
        },
        {
            company: 'Vumonic Datalabs',
            role: 'Head of Strategy',
            duration: 'May 2020 - Oct 2020 · 6 mos',
            about: 'Vumonic is a global data provider that furnishes alternative data (e-receipt data) to the world\'s largest brands, financial institutions, online marketplaces, and more.',
            details: [
                'Acquired new business accounts, contributing to an annual revenue increase of 7.6Mn, while successfully managing sales pipelines for 100+ clients spanning diverse industries.',
                'Orchestrated end-to-end partner engagement process, resulting in 80% improvement in onboarding efficiency and seamless operational support.',
                'Developed persuasive sales pitches and decks, enhancing client engagement and satisfaction, leading to a 30% reduction in client inquiries.',
                'Ensured client retention and satisfaction, maintaining current clients through proactive communication and follow-up, leading to a 90% client retention rate.',
                'Collaborated between Product, Data Science, and Technology teams, ensuring alignment and on-time deliverables as per contracts, enhancing cross-functional efficiency.',
                'Pioneered category trends exploration and market analysis, identifying gaps in data reporting and methodologies, resulting in 15% improvement in overall data solution offerings.',
            ],
            skills: 'Sales Strategy · Client Relationship Management · Business Development · Data Solutions · Cross-functional Collaboration',
        },
        {
            company: 'CRED',
            role: 'Category Lead- Growth & Partnerships',
            duration: 'Jul 2019 - Jan 2020 · 7 mos',
            about: 'CRED, a fintech company, is a reward-based credit card payments app. It also lets users make house rent payments and provides short-term credit lines.',
            details: [
                'Enhanced customer satisfaction by guiding product development based on user insights, achieving a NPS score of 8/10.',
                'Implemented data-driven strategies, exceeding team KPIs and driving a 20% growth in category performance.',
                'Managed 50+ brand partnerships, elevating platform engagement and coin burn, resulting in a 25% brand participation boost.',
                'Led \'CRED Arcade\' initiative with global brands like Apple and Google, generating 20% more social media buzz and sustaining consistent coin burn.',
                'Pioneered Ad-sales monetization, initiating a new revenue stream and contributing to a 10% increase in revenue.',
                'Anchored impactful CRED x Mastercard campaign, adding 2L Mastercard users in 4 weeks, with a reach of 5Mn+ and 30 Cr coin burn.',
            ],
            skills: 'Partnerships · Business Development · Strategic Planning · Customer Insights · Stakeholder Management',
        },
        {
            company: 'Amazon',
            role: 'Associate Marketing Manager - Smartphones',
            duration: 'May 2017 - Jun 2019 · 2 yrs 2 mos',
            about: '[Amazon.com](http://amazon.com/), is a global multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.',
            details: [
                'Successfully orchestrated 15+ launches of flagship smartphones, including Nokia, BB, iPhone, and Huawei models, achieving average 15% increase in sales and surpassing conversion targets.',
                'Led cross-category events for Apple and Nokia, ensuring 20% visibility growth and consistently meeting project deadlines.',
                'Strategically executed telecom offers with partners (Airtel, Vodafone, Idea), driving 10% revenue surge and expanding market presence.',
                'Owned end-to-end strategy for BTF (below the fold) campaigns, elevating SOV (share of voice) and SOC (share of clicks) from 8% to 20% in just 4 months and enhancing category prominence.',
                'Curated and executed cross-site topical events, maintaining an abandon rate of 7% while driving significant engagement.',
                'Automated manual merchandising through semi-automated push notifications, sustaining a high CTR of 12%< and enhancing user experience.',
            ],
            skills: 'Marketing Strategy · Product Launches · Cross-Category Events · Strategic Planning · Partner Collaboration · UX optimization · SEO best practices · Data Analysis',
        },
        {
            company: 'AntasDesi- Pingakash Tradex Pvt. Ltd.',
            role: 'Senior Merchandiser',
            duration: 'May 2014 - Jun 2015 · 1 yrs 2 mos',
            about: 'AntasDesi- Pingakash Tradex Pvt. Ltd. is a company based in Delhi (India).',
            details: [], // Add details here if available
            skills: '', // Add skills here if available
        },
        {
            company: 'Shahi Apparel Private Limited',
            role: 'Management Trainee',
            duration: 'Jul 2013 - Apr 2014 · 10 mos',
            about: 'Shahi Apparel Private Limited is a company based in Faridabad (India).',
            details: [], // Add details here if available
            skills: '', // Add skills here if available
        },
        // Add more work experience entries here
    ];

    return (
        <Section sx={{ backgroundColor: theme.colors.peacock }}>
            <Heading
                variant="h3"
                sx={{ color: theme.colors.peach, paddingBottom: '2rem' }}>
                My Resume
            </Heading>
            <Typography variant="h5" sx={{ marginBottom: '0.5rem', color: theme.colors.peach }}>
                Work Experience
            </Typography>
            {workExperienceData.map((exp, index) => (
                <Box key={index} sx={{ marginBottom: '1rem', color: theme.colors.peach }}>
                    <Typography variant="subtitle1">
                        <strong>{exp.company}, {exp.role}</strong>
                    </Typography>
                    <Typography variant="subtitle2">{exp.duration}</Typography>
                    <Typography variant="body1">{exp.about}</Typography>
                    {exp.details.length > 0 && (
                        <ul>
                            {exp.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    )}
                    <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                        Skills: {exp.skills}
                    </Typography>
                    <hr style={{ marginTop: '1rem', borderColor: theme.colors.peach }} />
                </Box>
            ))}
        </Section>
    );
};

const Education = () => {
    const theme = useContext(ThemeContext);
    const educationData = [
        {
            course: 'Engineering Fellow',
            college: 'Pesto Tech',
            year: '2023',
        },
        {
            course: 'PGDM-C (Strategic Marketing & Communication)',
            college: 'MICA, Ahmedabad',
            year: '2017',
        },
        {
            course: "Bachelor's of Fashion Technology",
            college: 'National Institute of Fashion Technology, New Delhi',
            year: '2013',
        },
        // Add more education entries here
    ];

    return (
        <Section sx={{ backgroundColor: theme.colors.peacock }}>
            <Typography variant="h5" sx={{ marginBottom: '0.5rem', color: theme.colors.peach }}>
                Education
            </Typography>
            {educationData.map((edu, index) => (
                <Box key={index} sx={{ marginBottom: '1rem', color: theme.colors.peach }}>
                    <Typography variant="subtitle1">
                        <strong> {edu.course}, {edu.year}</strong>
                    </Typography>
                    <Typography variant="body1">{edu.college}</Typography>
                </Box>
            ))}
        </Section>
    );
};

const Resume = () => {
    const theme = useContext(ThemeContext);
    return (
        <ResumeContainer sx={{ backgroundColor: theme.colors.blossom }}>
            <WorkExperience />
            <Education />
        </ResumeContainer>
    );
};

export default Resume;
