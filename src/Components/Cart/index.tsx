import React from "react";
import Button from "../Btn";
import { Select, Image } from "antd";
import s from "./stayle.module.scss";

interface carttype {
  text: string;
  title: string;
  image: any;
  price: string;
  trueee?: number;
  setData?: any;
}

const Carts = ({ text, title, image, price, trueee, setData }: carttype) => {
  return (
    <div className={s.cart}>
      <div className={s.cart__head}>
        <i className="fa-regular fa-heart"></i>
      </div>
      <p className={s.cart__title}>{text}</p>
      <h4 className={s.cart__heading}>{title}</h4>
      <Image width={200} height={200} src={image} />
      <h2 className={s.cart__price}>${price}</h2>
      <Select style={{ width: "90%" }} defaultValue={"---Please Select---"} />

      {Number(trueee) % 2 === 0 ? (
        <Button
          onclick={setData}
          bg
          hover
          body="Add to Cart"
          icon={<i className="fa-solid fa-cart-shopping"></i>}
        ></Button>
      ) : (
        <Button
          onclick={setData}
          body="Add to Cart"
          icon={<i className="fa-solid fa-cart-shopping"></i>}
        ></Button>
      )}
    </div>
  );
};

export default Carts;
