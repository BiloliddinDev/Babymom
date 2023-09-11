import React from "react";
import Text from "../Texts";
import Button from "../Btn";
import s from "./stayle.module.scss";
import CaruselApp from "../Carusel";
import { categdata } from "@/Constants";
import Image from "next/image";

const Categ = () => {
  return (
    <div className="container">
      <div className={s.coteg}>
        <Text title="Modern Categories" grentext="for all kids" />
        <Button
          body="go to category"
          icon={<i className="fa-solid fa-globe"></i>}
          bg
          hover
        />
      </div>
      <div className={s.categ__wrapper}>
        <CaruselApp>
          {categdata.map((e, i) => (
            <div key={e.id} className={s.cards}>
              <Image src={e.img} height={45} width={45} alt={e.name}></Image>
              <p className={s.cards__text}>{e.categ}</p>
              <h2 className={s.cards__heading}>{e.name}</h2>
              <div>
                {e.btn ? (
                  <Button
                    body="See"
                    bg
                    hover
                    icon={<i className="fa-solid fa-globe"></i>}
                  />
                ) : (
                  <Button
                    body="See"
                    icon={<i className="fa-solid fa-globe"></i>}
                  />
                )}
              </div>
            </div>
          ))}
        </CaruselApp>
      </div>
    </div>
  );
};

export default Categ;
