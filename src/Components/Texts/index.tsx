import { type } from "os";
import React from "react";
import s from "./stayle.module.scss";

type texttype = {
  title: string;
  grentext: string;
};

const Text = ({ title, grentext }: texttype) => {
  return (
    <h1>
      <span className={s.title}>
        <b className={s.text}>{title}</b>
        {grentext}
      </span>
    </h1>
  );
};

export default Text;
