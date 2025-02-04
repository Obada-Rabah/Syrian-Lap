import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer text-white mt-5 p-4 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5>Contact Us</h5>
            <a href="tel:+963982747763">Phone: +963 982 747 763</a>
            </div>
            <div className="col-md-6 mb-3">
            <h5>Follow Us</h5>
            <a href="https://www.facebook.com/profile.php?id=61571807883115&mibextid=ZbWKwL" className="text-white me-3"><i className="icon fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/syrian_laptops?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-white me-3"><i className="icon fab fa-instagram"></i></a>
            <a href="https://wa.me/+963982747763?text=" className="text-white"><i className="icon fab fa-whatsapp"></i></a> 
          </div>
        </div>
        <div className="mt-3">
          <p className='text-white'>&copy; 2025 Syrian Lap</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
