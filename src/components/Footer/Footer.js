import React from 'react';
import './footer.css'
function Footer() {
  return (
    <div className='footer-section'>
      <div className="footer-content d-flex">
        <div className='footer-item'>
          <h3>About Us</h3>
          <p>
            B Block Chemicals is offering integrated catalog products and services in Pharmaceuticals, agrochemical and other related industries.
          </p>
          <p>
            B Block Chemicals provides higher end collaboration for the products and services, which enhance the capability and productivity.
          </p>
        </div>
        <div className='footer-item'>
          <h3>Useful Links</h3>
          <div>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Products</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className='footer-item'>
          <h3>Contact Us</h3>
          <div>bblockchemicals@gmail.com</div>
          <div>Address here</div>
        </div>
      </div>
    </div>
  )
}

export default Footer;