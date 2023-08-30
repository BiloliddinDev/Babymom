import React from "react";
import Text from "../Texts";
import Button from "../Btn";
import s from "./stayle.module.scss";
import CaruselApp from "../Carusel";
import { ProductsData } from "@/Constants";
import Carts from "../Cart";
import { useProducts } from "../../Zustand";

const Products = () => {
  const { setProducts } = useProducts();

  return (
    <div className="container">
      <div className={s.products}>
        <Text title="Featured Products" grentext="for all kids" />
        <Button
          body="Go to Products"
          bg
          hover
          icon={<i className="fa-solid fa-globe"></i>}
        />
      </div>
      <div>
        <CaruselApp>
          {ProductsData.map((e) => (
            <Carts
              trueee={e.id}
              image={e?.image?.src}
              price={e.price}
              text={e.text}
              title={e.title}
              key={e.id}
              setData={() => setProducts(e)}
            />
          ))}
        </CaruselApp>
      </div>
    </div>
  );
};

export default Products;
