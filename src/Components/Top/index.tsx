import React from "react";
import s from "./stayle.module.scss";

const Top = () => {
  return (
    <div className={`${s.top} container`}>
      <div>
        <i className="fa-brands fa-telegram"></i>
        <b>7 Days A Week</b> From 9:00 Am To 7:00 Pm
      </div>
      <a href="tel:+998 90 924 15 06">
        <i className="fa-solid fa-phone"></i>
        Contact
      </a>
    </div>
  );
};

export default Top;
