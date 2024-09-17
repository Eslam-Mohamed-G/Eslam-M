import React from "react";
import "./about.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about" id="about">
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
              delay: 0.5,
            },
          },
        }}
      >
        <h1>
        <span className="icon-profile"></span>About Me
      </h1>
        <motion.p>
          A web developer that continuously strive to learn new and cutting edge
          technologies. I have great interest with technologies that challenges
          me to grow, and willingness to continuously learn. With strong
          knowledge in HTML, CSS, JS and experienced in using React, Angular,
          Nodejs, Python, Git/Github.
        </motion.p>
      </motion.div>

      <div>
        <h2>
        <span className="icon-education"></span>Education
      </h2>
      <div className="education">
        <h3>Mansoura University </h3>
        <p>
          Bachelor’s degree in Computer Science from the Faculty of Computer &
          Information Sciences
        </p>
      </div>
      </div>

      

      <section>
        <h2><span className="icon-gears"></span>skills</h2>

        <div className="skill-card">
          <ul>
            <li className="skill-icon"><span className="icon-html5"></span>HTML</li>
            <li className="skill-icon"><span className="icon-sass"></span>Sass</li>
            <li className="skill-icon"><span className="icon-tailwindcss"></span>Tailwindcss</li>
            <li className="skill-icon"><span className="icon-node-dot-js"></span>Node.js</li>
          </ul>

          <ul>
            <li className="skill-icon"><span className="icon-css3"></span>CSS</li>
            <li className="skill-icon"><span className="icon-bootstrap1"></span>BootStrap</li> 
            <li className="skill-icon"><span className="icon-react"></span>React</li>
            <li className="skill-icon">Strapi</li>
          </ul>

          <ul>
            <li className="skill-icon"><span className="icon-javascript1"></span>JavaScript</li> 
            <li className="skill-icon"><span className="icon-typescript"></span>TypeScript</li>
            <li className="skill-icon"><span className="icon-next-dot-js"></span>Next.js</li>
            <li className="skill-icon">cloudinary</li>
          </ul>

          <ul>
            
          </ul>
        </div>
        
      </section>
    </div>
  );
};

export default About;
