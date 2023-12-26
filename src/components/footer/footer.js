// Header.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-wrap-layout2">
          <div className="container">
              <div className="footer-box-layout2">
                  <div className="footer-logo">
                      <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJZg-cxm8BON0iDBiVCSAa6vRk3JyZtEDbw&usqp=CAU" alt="logo"/></a>
                  </div>
                  <ul className="footer-social">
                      <li><a href="https://www.w3schools.com/">W3SCHOOL.COM</a></li>
                      <li><a href="https://www.codewars.com/">CODEWARS.COM</a></li>
                      <li><a href="https://www.codecademy.com/">CODECADEMY.COM</a></li>
                      <li><a href="https://www.udemy.com/">UDEMY.COM</a></li>
                  </ul>
                  <div className="copyright">© 2023 website. All Rights Reserved.</div>
              </div>
          </div>
      </footer>
  );
};

export default Footer;