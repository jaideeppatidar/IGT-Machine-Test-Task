import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="cta-box">
        <h2>Ready to learn design<br />with Nia Matos</h2>
        <button className="cta-button">Start Learning Today</button>
      </div>

      <hr />

      <div className="footer-links">
        <div className='footer-heading'>
          <h4>About Us</h4>
          <p>Support Center</p>
          <p>Customer Support</p>
          <p>About Us</p>
          <p>Copyright</p>
          <p>Popular Campaign</p>
        </div>
        <div className='footer-heading'>
          <h4>Our Information</h4>
          <p>Return Policy</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Site Map</p>
          <p>Store Hours</p>
        </div>
        <div className='footer-heading'>
          <h4>My Account</h4>
          <p>Press inquiries</p>
          <p>Social media</p>
          <p>Directories</p>
          <p>Images & B-roll</p>
          <p>Permissions</p>
        </div>
        <div className='footer-heading'>
          <h4>Policy</h4>
          <p>Application security</p>
          <p>Software principles</p>
          <p>Unwanted software policy</p>
          <p>Responsible supply chain</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
