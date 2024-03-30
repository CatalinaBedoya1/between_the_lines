import React from 'react';
import { useCallback } from "react";
import "./Footer.css";
import logo from "../assets/BTLLogo.png";

const Footer = () => {
  const onAboutUsTermsClick = useCallback(() => {
    // Please sync "about us page" to the project
  }, []);

  return (
    <footer className="footer">
      <div className="footer1" />
      <div className="about-us-terms-container" onClick={onAboutUsTermsClick}>
        <p className="about-us">{`About Us `}</p>
        <img src={logo} alt="Logo" className="footer-logo" />
        <p className="blank-line4">&nbsp;</p>
        <p className="blank-line5">&nbsp;</p>
        <p className="terms-of-use">Terms of Use           Privacy Policy</p>
        <p className="blank-line6">&nbsp;</p>
      </div>
      <div className="copyright-icon-frame1">
        <div className="about-us-frame">
          <div className="footer-info">
            <img
              className="copyright-icon"
              loading="lazy"
              alt=""
              src="/copyright-icon.svg"
            />
          </div>
          <div className="copyright-icon1">
            <div className="between-the-lines-container">
              <p className="between-the-lines1">2024 Between the Lines</p>
              <p className="blank-line7">&nbsp;</p>
              <p className="blank-line12">Where your next adventure awaits</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
