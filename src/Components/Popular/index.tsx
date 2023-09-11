import React from "react";
import Text from "../Texts";
import Button from "../Btn";
import s from "./stayle.module.scss";
import { ProductsData } from "@/Constants";
import CaruselApp from "../Carusel";
import Carts from "../Cart";

const Popular = () => {
  return (
    <div className={` ${s.container} container`}>
      <div className={s.lates}>
        <Text title="Latest Product" grentext="for all kids" />
        <Button
          body="go to category"
          icon={<i className="fa-solid fa-globe"></i>}
          bg
          hover
        />
      </div>
      <div className={s.lates__wrapper}>
        <div className={s.lates__folder}>
          <p className={s.lates__text}>CATEGORIES</p>
          <h2 className={s.lates__heading}>
            <b className={s.lates__heading__b}>Best Baby Toys</b> for all kids
          </h2>
          <p className={s.lates__lorem}>
            Lorem Ipsum is simply dummy text of the printing <br /> and
            typesetting industry. Lorem Ipsum has been the <br /> industrys
            standard dummy.
          </p>
          <Button
            hover
            bg
            body="go to category"
            icon={<i className="fa-solid fa-globe"></i>}
          />
        </div>
        <div className={s.lates__carusel}>
          <CaruselApp>
            {ProductsData.map((e) => (
              <Carts
                key={e.id}
                trueee={e.id}
                image={e?.image?.src}
                price={e.price}
                text={e.text}
                title={e.title}
              />
            ))}
          </CaruselApp>
        </div>
      </div>
    </div>
  );
};

export default Popular;
