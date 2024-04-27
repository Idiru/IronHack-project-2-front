//components/AboutCard.jsx
import React from "react";
import aboutImg from "../assets/FrontCard-about.png";
import { Typography } from "@mui/material";
import icono from '../assets/icono.svg';

export default function AboutCard() {
  return (
    <div>

      <div className="about-header">
          <Typography
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2.5rem",
                md: "3rem",
              },
            flexGrow: 1,
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "PT Sans Caption, sans-serif",
            fontWeight: "bold",
            color: "black",
            mt: 4,
            mb: 4,
            opacity: 0.1,
            }}>
              <img src={icono} alt="Verde" style={{ width: 'auto', height: '1em', verticalAlign: 'bottom' }} />
              ABOUT
          </Typography>
          <p>At VerdeVogue, we redefine elegance with a conscience. </p>
        </div>

        <div className="about-card">
        <div className="about-text">
          <p><span>OUR MISSION</span> lorem ipsum dolor sit amet consectetur adipiscing elit luctus iaculis aenean sem, risus tincidunt torquent egestas fusce ligula semper neque porta sed, justo sociis placerat eu natoque habitant orci dui etiam odio. Viverra vestibulum facilisis praesent iaculis penatibus nam platea, potenti arcu non scelerisque placerat cum natoque facilisi, semper proin leo bibendum interdum tellus. Scelerisque morbi orci nec sodales integer arcu platea, posuere nascetur etiam sagittis lobortis luctus per, ullamcorper metus vulputate condimentum nisi fames. Porttitor et volutpat conubia fusce quis turpis netus venenatis sem convallis torquent habitant sapien, mauris hendrerit magnis nam interdum inceptos euismod ante fringilla nisi ridiculus commodo. Vestibulum pretium euismod netus per fringilla fusce fermentum, ultrices tortor cras dapibus nulla quis consequat, libero hac nam viverra ornare ac.</p>
          <p><span>OUR COMMITMENT</span> vestibulum pretium euismod netus per fringilla fusce fermentum, ultrices tortor cras dapibus nulla quis consequat, libero hac nam viverra ornare ac. Imperdiet fringilla eros primis lectus natoque pulvinar nisi felis aliquam etiam, ligula nascetur vitae facilisis justo eu ullamcorper vivamus netus, tincidunt penatibus duis lacinia tempor congue egestas molestie rhoncus. Penatibus facilisis dapibus tristique mauris hendrerit leo, conubia sagittis sociosqu sollicitudin sapien, felis at bibendum habitant vel. Primis dis fermentum aenean vestibulum fusce rhoncus dignissim, dictum posuere accumsan semper magna parturient sem orci, class potenti egestas ultrices venenatis placerat. Primis eros aliquet sociosqu curae dapibus etiam mattis mollis integer, aenean varius felis bibendum eleifend arcu placerat velit nascetur, vehicula sed ornare dictumst pharetra luctus montes pulvinar.</p>
        </div>
        <div className="about-img">
          <img src={aboutImg} alt="about" className="about-img" />
        </div>
      </div>
      
    </div>
  );
}
