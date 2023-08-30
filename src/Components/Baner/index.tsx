import React from "react";
import s from "./stayle.module.scss";

const Baner = () => {
  return (
    <div className="container">
      <div className={s.baner}>
        <p className={s.baner__text}>CATEGORIES FOR MOTHERS</p>
        <h2 className={s.baner__heading}>
          <b className={s.baner__span}>Breast-feeding</b>
          for all kids
        </h2>
        <p className={s.baner__lorem}>
          guide, how to properly care and feed a baby
        </p>
        <div className={s.baner__box}>
          <input type="text" placeholder="get a guide in the еmail" />
          <div className={s.baner__folder}>
            <i className="fa-solid fa-globe"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baner;
