//import React, { useState, useEffect } from 'react';
//import { useLocation, BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Container from '@mui/material/Container';
//import { ThemeProvider } from '@mui/material/styles';
//import theme from './theme';
//import Header from './components/Home';
//import Footer from './components/Footer';
//import HomePage from './pages/HomePage';
//import CataloguePage from './pages/CataloguePage';
//import ProductPage from './pages/ProductPage';
import './App.css'
// import CheckoutPage from './pages/CheckoutPage';
// import PaymentPage from './pages/PaymentPage';
// import ProfilePage from './pages/ProfilePage';
import React from 'react';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    if (!['/catalogue', '/product'].includes(location.pathname)) {
      setCategoryFilter('all');
    }
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ maxWidth: 'lg', mx: 'auto' }}>
        <Header setCategoryFilter={setCategoryFilter} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogue" element={<CataloguePage categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />} />
          <Route path="/product/:id" element={<ProductPage />} />
          {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
          {/* <Route path="/payment" element={<PaymentPage />} /> */}
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
        </Routes>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;