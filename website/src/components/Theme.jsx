import React from 'react';
export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const theme = {
    colors: {
      primary: '#B45967', //cadillac
      secondary: '#292C2D', //shark
      tertiary: '#59877D', //Asparagus
      quaternary: '#AE8D79', //Chocolate
      quinary: '#f44336', //Pomegranate
      text: '#F2EFEA',
    },
    typography: {
      logoFont: "UnicaOne",
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

