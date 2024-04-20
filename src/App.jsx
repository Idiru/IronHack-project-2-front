import React, { useState, useEffect } from 'react';
import { useLocation, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CataloguePage from './pages/CataloguePage';
import ProductPage from './pages/ProductPage';
import './App.css'
// import CheckoutPage from './pages/CheckoutPage';
// import PaymentPage from './pages/PaymentPage';
// import ProfilePage from './pages/ProfilePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;
