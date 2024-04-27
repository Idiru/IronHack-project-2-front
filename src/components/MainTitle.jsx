import React from 'react';
import Typography from '@mui/material/Typography';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const MainTitle = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <Typography
      sx={{
        fontSize: {
          sm: "2.5rem",
          md: "3rem",
        },
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'PT Sans Caption, sans-serif',
        fontWeight: 'bold',
        fontSize: '4rem',
        color: 'black',
        mt: 4,
        mb: 4,
        opacity: 0.1,
      }}
    >
      {children}
    </Typography>
  );
};

export default MainTitle;