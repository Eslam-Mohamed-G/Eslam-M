// @ts-nocheck
import React, { useRef } from "react";
import Lottie from "lottie-react";
import frontendAnimation from '../../../src/animation/developer skills Animation.json';
import "./hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  const animation = useRef();
  

  return (
    <section className="hero" id="hero">
      <div className="left-section">
        <div className="parent-avatar">
          <img src="./img/me.jpeg" className="avatar" alt="eslam" />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .5,
              },
            },
          }}
          className="tm-site-header"
        >
          <h1>
            Hi, It's <span>Eslam M. 👋</span>
          </h1>
          <h3 className="text-animation">
            I'm a <span></span>
          </h3>
          <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .6,
              },
            },
          }}
          >
            Talented Frrontend Developer Proficient in HTML, CSS(including sass and Bootstrap), JavaScript (with TypeScript)
            React, Next.js, and responsive design, skilled in unit testing, git/github, API integration.
          </motion.p>
        </motion.div>
        <div className="icons">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/islam-mohamed-237759312/"
                target="_blank"
                className="hero-icon icon-linkedin-square"
              ></a>
            </li>
            <li>
              <a
                href="https://github.com/Eslam-Mohamed-G"
                target="_blank"
                className="hero-icon icon-github"
              ></a>
            </li>
            <li>
              <a
                href="https://x.com/IslamMo_G"
                target="_blank"
                className="hero-icon icon-twitter"
              ></a>
            </li>
          </ul>
        </div>
        <button className="resume" onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://drive.google.com/file/d/1MbP6RoHrOWx7mxbtRkaAsgy4uC31PBAE/view?usp=sharing';
        }}>Resume 📝</button>
      </div>

      <div className="right-section animation">
        <Lottie
          lottieRef={animation}
          onLoadedImages={()=>{
            animation.current.setSpeed(5)
          }}
          animationData={frontendAnimation}

          className="frontendAnimation"
        />
      </div>
    </section>
  );
};

export default Hero;
