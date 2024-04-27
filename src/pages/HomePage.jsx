//src/pages/HomePage.jsx
import Button from "@mui/material/Button";
import theme from "../theme";
import accessoriesImg from '../assets/FrontCard-accessories.png';
import bottleImg from '../assets/FrontCard-bottle.png';
import lookImg from '../assets/FrontCard-look.png';
import petImg from '../assets/FrontCard-pet.png';
import { Divider } from "@mui/material";
import AboutCard from "../components/AboutCard";
import Ticker from "../components/Ticker";
// img animation => npm install framer-motion
import React, { useEffect } from "react";
import { useViewportScroll, useTransform, motion } from "framer-motion";
import { Link } from 'react-router-dom';

export default function HomePage() {

  //scroll effect
  React.useEffect(() => {
    const containerHero = document.querySelector('.container-hero');
    const onScroll = () => {
      requestAnimationFrame(() => {
        const maxScroll = 1000; //max px down
        const scrollY = window.scrollY > maxScroll ? maxScroll : window.scrollY; //calc vert position
        containerHero.style.transform = `translateX(-50%) translateY(${scrollY}px)`; //center
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll); //clean up event
  }, []);

  // bottle animation 
  const { scrollYProgress } = useViewportScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]); // [scroll] & [rotates]


  return (
    <div>

      <Ticker />
      <section className="hero">
        <div className="container-hero">
          <div className="content-bg">
            <h1><span>verde</span>Vogue</h1>
            <h3>CONCIOUS | CLASSY | CULTIVATED</h3>
            <p>A curated selection of classy, conscious products.</p>
            <Link to="/catalogue">
              <Button variant="contained">explore</Button>
            </Link>
          </div>
        </div>

        <div className="home-bg">
          <div className="grid-container">
            <img src={accessoriesImg} alt="Accessories" className="img-left"/>
            <img src={lookImg} alt="Look" className="img-right"/>
            <motion.img style={{ rotate }} src={bottleImg} alt="Bottle" className="img-left"/>
            <img src={petImg} alt="Pet" className="img-right"/>
          </div>
        </div>
      </section>
  
      <section>
        <Divider />
        <AboutCard />
      </section>

    </div>
  );
}