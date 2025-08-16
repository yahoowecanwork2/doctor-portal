import React from 'react';
import '../components-css/header.css';
import Logo from '../assets/images/hero-img/image 45.png';

function Header() {
  return (
    <div>
  <header>
    <img  className="Logo"   src={Logo} alt="logo " />
    <nav>
      <a href="#">About Us</a>
      <a href="#">Onboarding</a>
      <a href="#">FAQ</a>
      <a href="#">Testimonials</a>
    </nav>

  </header>
    </div>
  )
}

export default Header;