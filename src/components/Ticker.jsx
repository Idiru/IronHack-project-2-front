import React from 'react';
import { Link } from "react-router-dom"; 
import theme from '../theme';
import { Divider } from '@mui/material';

const Ticker = () => {
  return (
    
    <div className="discount-ticker">
    <Divider />
      <div className="ticker-text">
        <Link to="/subscribe" sx={{ color: 'primary.dark', fontWeight: 'normal', textDecoration: 'none' }}>
          GET 20% DISCOUNT ON YOUR FIRST PURCHASE HERE
        </Link>
      </div>
    <Divider />
    </div>
  );
};

export default Ticker;
