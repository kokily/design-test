import React from 'react';
import FooterContent from './footer/FooterContent';
import Copyright from './footer/Copyright';

function Footer() {
  return (
    <footer id="footer" className="mt-0">
      <FooterContent />
      <Copyright />
    </footer>
  );
}

export default Footer;
