import React, { useState } from "react";
import Top from "../Top";
import s from "./stayle.module.scss";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { Select } from "antd";

const Navbar = () => {
  const [drop, setDrop] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [show, setShow] = useState(false);
  const { i18n, t } = useTranslation(["common"]);

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <div id="top" className={s.box}>
      <Top />
      <div>
        <nav className={` ${s.nav} container`}>
          <Link href="/">
            <h1 className={s.nav__logo}>Babymom</h1>
          </Link>
          <div className={s.nav__wrapper}>
            <div className={`${s.nav__box1} ${show ? s.nav__show : ""} `}>
              <div className={s.nav__allprod}>
                <i className="fa-solid fa-list"></i>
                <p onClick={() => setDrop(!drop)}> All products</p>
                <i className="fa-solid fa-chevron-down"></i>
                <ul className={drop ? s.nav__drop : s.nav__dropn}>
                  <li>Products</li>
                  <li>Products</li>
                  <li>Products</li>
                  <li>Products</li>
                </ul>
              </div>
              <div className={s.nav__pres}>
                <p onClick={() => setDrop2(!drop2)}>Pregnancy</p>
                <i className="fa-solid fa-chevron-down"></i>
                <ul className={drop2 ? s.nav__drop : s.nav__dropn}>
                  <li>Products</li>
                  <li>Products</li>
                  <li>Products</li>
                  <li>Products</li>
                </ul>
              </div>
              <div className={s.nav__baby}>{t("title")}</div>
            </div>
            <div className={s.nav__box2}>
              <div className={s.nav__user}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <Select
                defaultValue={"Uz"}
                style={{ width: 60 }}
                onChange={handleChange}
                options={[
                  { value: "uz", label: "Uz" },
                  { value: "ru", label: "Ru" },
                ]}
              />
              <Link href="/Karzina">
                <div className={s.nav__karzina}>
                  <span className={s.nav__span}>cart: items</span>
                  <div className={s.nav__user}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <p className={s.nav__caunter}>0</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div onClick={() => setShow(!show)} className={s.nav__bar}>
            <i className={`fa-solid fa-bars`}></i>
          </div>
        </nav>
      </div>
      {show ? (
        <div onClick={() => setShow(!show)} className={s.nav__parda}></div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
