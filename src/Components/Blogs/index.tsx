import React from "react";
import Text from "../Texts";
import Button from "../Btn";
import s from "./stayle.module.scss";
import CaruselBlog from "./Carusel";

const Blogs = () => {
  return (
    <div className="container">
      <div className={s.blogs}>
        <Text title="Our Latest Blog" grentext="for all kids." />
        <Button body="Go to Blogs" hover bg />
      </div>
      <div className={s.blogs__wrapper}>
        <CaruselBlog />
      </div>
    </div>
  );
};

export default Blogs;
