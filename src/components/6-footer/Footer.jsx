import React from 'react'
import './footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        {/* <li><a href="">Speaking</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>


      <ul>
        <li><a href="https://www.linkedin.com/in/islam-mohamed-237759312/" target="_blank" className='social-icon icon-linkedin-square'></a></li>
        <li><a href="https://github.com/Eslam-Mohamed-G" target="_blank" className='social-icon icon-github'></a></li>
        <li><a href="tel:+01021698146" className='social-icon icon-whatsapp'></a></li>
        {/* <li><a href="mailto:islam.gomaa.3rb@gmail.com" target="_blank" className='social-icon icon-envelope'></a></li> */}
        <li><a href="https://x.com/IslamMo_G" target="_blank" className='social-icon icon-twitter'></a></li>
      </ul>
    </footer>
  )
}

export default Footer