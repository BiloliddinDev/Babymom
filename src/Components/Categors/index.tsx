import React from "react";
import s from "./stayle.module.scss";

const Categors = () => {
  return (
    <div className={`box container ${s.box}`}>
      <div className={s.wrapper}>
        <div className={s.wrapper__card}>
          <div>
            <h4 className={s.wrapper__text}>CATEGORIES</h4>
            <h2>Practical actions</h2>
            <h5>for babies</h5>
          </div>
          <button>
            see <i className="fa-solid fa-globe"></i>
          </button>
        </div>
        <div className={s.wrapper__card}>
          <div>
            <h4 className={s.wrapper__text}>CATEGORIES</h4>
            <h2>Practical actions</h2>
            <h5>for babies</h5>
          </div>
          <button>
            see <i className="fa-solid fa-globe"></i>
          </button>
        </div>
        <div className={s.wrapper__card}>
          <div>
            <h4 className={s.wrapper__text}>CATEGORIES</h4>
            <h2>Practical actions</h2>
            <h5>for babies</h5>
          </div>
          <button>
            see <i className="fa-solid fa-globe"></i>
          </button>
        </div>
        <div className={s.wrapper__card}>
          <div>
            <h4 className={s.wrapper__text}>CATEGORIES</h4>
            <h2>Practical actions</h2>
            <h5>for babies</h5>
          </div>
          <button>
            see <i className="fa-solid fa-globe"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categors;
