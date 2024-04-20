//src/components/MainTitle.jsx
import React from 'react';
import Typography from '@mui/material/Typography';

const MainTitle = ({ children }) => {
  return (
    <Typography
      sx={{
        fontSize: {
          xs: '1.5rem',  
          sm: '2.5rem',  
          md: '3rem',    
        },
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'PT Sans Caption, sans-serif',
        fontWeight: 'bold',
        color: 'black',
        mt: 4,
        mb: 4,
        opacity: 0.1,
        '& span': {
          color: 'primary.main',
        }
      }}
    >
      {children}
    </Typography>
  );
};

export default MainTitle;