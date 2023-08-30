import React from "react";
import Text from "../Texts";
import Button from "../Btn";
import s from "./stayle.module.scss";
import CaruselTestimonls from "./Carusel";

const Testimonals = () => {
  return (
    <div className="container">
      <div className={s.test}>
        <div className={s.test__wrapper}>
          <Text title="Testimonial" grentext="for all kids" />
          <Button
            body="go to category"
            icon={<i className="fa-solid fa-globe"></i>}
            bg
            hover
          />
        </div>
      </div>
      <div>
        <CaruselTestimonls />
      </div>
    </div>
  );
};

export default Testimonals;
