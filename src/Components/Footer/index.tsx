import React from "react";
import s from "./stayle.module.scss";

const Footer = () => {
  return (
    <footer className={`${s.footer} container`}>
      <div className={s.footer__loogs}>
        <h2>BabyMom</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and <br />
          typesetting industry.
        </p>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-solid fa-message"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>
      <div className={s.adress}>
        <h1>
          <a href="#">SHOP</a>
        </h1>
        <p>
          <a href="#">FAQ </a>
        </p>
        <p>
          <a href="#"> Terms & Conditions</a>
        </p>
        <p>
          <a href="#"> Delivery Information</a>
        </p>
        <p>
          <a href="#"> About Us</a>
        </p>
        <p>
          <a href="#"> Privacy Policy</a>
        </p>
        <p>
          <a href="#"> Brands</a>
        </p>
      </div>
      <div className={s.adress}>
        <h1>
          <a href="#">CUSTOMER SERVICE</a>
        </h1>
        <p>
          <a href="#">Contact Us </a>
        </p>
        <p>
          <a href="#"> Returns</a>
        </p>
        <p>
          <a href="#"> Site Map</a>
        </p>
        <p>
          <a href="#"> Gift Certificates</a>
        </p>
        <p>
          <a href="#"> Affiliate</a>
        </p>
      </div>
      <div className={s.adress}>
        <h1>
          <a href="#">ACCOUNT </a>
        </h1>
        <p>
          <a href="#">Account </a>
        </p>
        <p>
          <a href="#"> Order History </a>
        </p>
        <p>
          <a href="#"> Wish List</a>
        </p>
        <p>
          <a href="#"> Newsletter</a>
        </p>
        <p>
          <a href="#"> Specials</a>
        </p>
        <p>
          <a href="#"> Contact Us</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
