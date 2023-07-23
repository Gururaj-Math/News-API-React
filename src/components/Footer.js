import React from "react";
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <h1>NewsStop</h1>
      <p>Copyright © 2023 NewsStop, Inc.</p>
      <div className="pLinks">
        <a href="https://github.com/Gururaj-Math">
          <i class="bx bxl-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/gururaj-math-223360255/">
          <i class="bx bxl-linkedin-square"></i>
        </a>
        <a href="https://codepen.io/gururajmath">
          <i class="bx bxl-codepen"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
