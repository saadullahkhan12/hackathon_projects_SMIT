

import React from 'react';

function Foooter() {
    
    return (
        <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
        <img src='https://logodix.com/logo/816161.jpg 'className="logo" alt="Vite logo" />
          <p className="footer-text">
            We offer a variety of loan services to help you achieve your dreams, from weddings to home construction, business startups, and education. Our mission is to make financial assistance simple and accessible for everyone.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/wedding-loans">Wedding Loans</a></li>
            <li><a href="/home-loans">Home Construction Loans</a></li>
            <li><a href="/business-loans">Business Startup Loans</a></li>
            <li><a href="/education-loans">Education Loans</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-links">
            <a href="#" className="social-icon">Facebook</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">Instagram</a>
            
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-bottom-text">© 2025 Your Company Name. All rights reserved.</p>
      </div>
    </div>
    );
}
export default Foooter;