import React from 'react';
export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const theme = {
        colors: {
            redhot: '#ef472c',
            peacock: '#2a9da0',
            teal: '#45b4ae',
            midnight: '#181617',
            sunray: '#e38e31',
            blossom: '#ee9e97',
            peach: '#f5d0c0',
            background: '#edeae3',
            text: 'black',
        },
        typography: {
            logoFont: "'Vina Sans', cursive",
            headingFont: "'Lato', sans-serif",
            bodyFont: "'Open Sans', sans-serif",
            otherFont: "'Open Sans', sans-serif",
            fontSize: {
                small: '14px',
                medium: '16px',
                large: '18px',
            },
        },
    };
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

// primary: '#0A0B0D',
// secondary: '#024145',
// tertiary: '#578382',
// quaternary: '#EABE7C',
// quinary: '#EC9A4E',
// senary: '#578382',
// septenary: '#E05B11',
// octonary: '#C71C0B',
// text: 'white',