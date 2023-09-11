import React from "react";
import s from "./stayle.module.scss";

const Showcase = () => {
  return (
    <div className={s.showcase}>
      <a className={s.showcase__top} href="#top">
        <i className="fa-solid fa-angles-up"></i>
      </a>
      <div className="container">
        <div className={s.showcase__wrapper}>
          <h1 className={s.showcase__heading}>
            <span>Best baby toys</span> for all kids
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy.
          </p>
          <div className={s.showcase__box1}>
            <div className={s.showcase__link}>
              Go to categories
              <i className="fa-solid fa-globe"></i>
            </div>
            <div className={s.showcase__link}>
              Get Bestsellers now
              <i className="fa-solid fa-globe"></i>
            </div>
          </div>
          <div className={s.showcase__folder}>
            <div className={s.showcase__cards}>
              <div className={s.showcase__row}>
                <i className="fa-solid fa-cart-flatbed"></i>
              </div>
              <div>
                <h4 className={s.showcase__title}>14-days</h4>
                <p className={s.showcase__p}>return guarantee</p>
              </div>
            </div>
            <div className={s.showcase__cards}>
              <div className={s.showcase__row}>
                <i className="fa-solid fa-percent"></i>
              </div>
              <div>
                <h4 className={s.showcase__title}>Get 35% off</h4>
                <p className={s.showcase__p}>for first order</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
