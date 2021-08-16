import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer-distributed" id="contact">
        <div class="footer-right">
          <a href="tel:917904639557">
            <i class="fa fa-phone"></i>
          </a>
          <a href="mailto:Toddlesbunch@gmail.com">
            <i class="fa  fa-envelope"></i>
          </a>
          <a href="https://instagram.com/toddlesbunch?utm_medium=copy_link">
            <i class="fa fa-instagram"></i>
          </a>
          <a href="https://wa.me/917904639557">
            <i class="fa fa-whatsapp"></i>
          </a>
        </div>

        <div class="footer-left">
          <p class="footer-links">
            <a class="link-1" href="#home">
              Home
            </a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </p>
          <p> ©Toddlesbunch</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
