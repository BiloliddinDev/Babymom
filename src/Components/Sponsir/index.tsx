import React from "react";
import Image from "next/image";
import Logo1 from "../../../public/Images/dreams.jpg";
import Logo2 from "../../../public/Images/cyberpark.logo.png";
import s from "./stayle.module.scss";

const Sponsir = () => {
  return (
    <div className={`container ${s.wrapper}`}>
      <div>
        <Image src={Logo1} width={230} height={45} alt="bu logo"></Image>
      </div>
      <div>
        <Image src={Logo2} width={230} height={60} alt="bu logo"></Image>
      </div>
      <div>
        <Image src={Logo1} width={230} height={45} alt="bu logo"></Image>
      </div>
      <div>
        <Image src={Logo2} width={230} height={60} alt="bu logo"></Image>
      </div>
    </div>
  );
};

export default Sponsir;
