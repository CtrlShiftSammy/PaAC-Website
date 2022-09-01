import React from "react";
import '../components/hero/hero.css';
import NavBar from "../components/navbar";

const Hero = () => {
  return <div>
      <section className="header">
      <NavBar></NavBar>
      <div className="text-box">
        <h1>Physics and Astronomy Club</h1>
        <p>IIT Roorkee</p>
      </div>
    </section>

  </div>
  };
  
  export default Hero;