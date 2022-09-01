import React from "react";
import '../components/astrophotography/astrophotography.css';
import NavBar from "../components/navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Astrophotography () {
  return <div>
    <section className="astrophotography">
    <NavBar></NavBar>
      <div className="astrophotography">
        <div className="photos">
          <Carousel autoPlay interval="5000" transitionTime="500">
            <div>
                <img src="images/IMG_7234.JPG" />
            </div>
            <div>
                <img src="images/IMG_7242.JPG" />
            </div>
            <div>
                <img src="images/IMG_7253.JPG" />
            </div>
            <div>
                <img src="images/IMG_7261.JPG" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>

    </div>
  };

export default Astrophotography;