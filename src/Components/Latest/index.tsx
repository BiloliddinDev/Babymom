import React from "react";
import Text from "../Texts";
import Button from "../Btn";
import Image from "next/image";
import s from "./stayle.module.scss";
import baner1 from "../../../public/Images/blog-1.jpg";
import baner2 from "../../../public/Images/blog-2.jpg";

const Latest = () => {
  return (
    <div className="container">
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
            typesetting industry. Lorem Ipsum has been the <br /> industry's
            standard dummy.
          </p>
          <Button
            wihte
            body="go to category"
            icon={<i className="fa-solid fa-globe"></i>}
          />
        </div>
        <div className={s.lates__box}>
          <div className={s.lates__card}>
            <div className={s.lates__head}>
              <i className="fa-regular fa-heart"></i>
            </div>
            <p className={s.lates__title}>Care Family</p>
            <h4 className={s.lates__heden}>
              How to take care of a newborn baby
            </h4>
            <Image
              className={s.lates__img}
              width={240}
              height={160}
              src={baner1}
            ></Image>
            <Button bg hover body="--Read--"></Button>
          </div>
          <div className={s.lates__card}>
            <div className={s.lates__head}>
              <i className="fa-regular fa-heart"></i>
            </div>
            <p className={s.lates__title}>Care Family</p>
            <h4 className={s.lates__heden}>
              How to take care of a newborn baby
            </h4>
            <Image
              className={s.lates__img}
              width={240}
              height={160}
              src={baner2}
            ></Image>
            <Button body="--Read--"></Button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Latest;
