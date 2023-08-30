import React from "react";
import classNames from "classnames";
import s from "./stayle.module.scss";

interface btntype {
  body: string;
  icon?: React.ReactNode;
  hover?: boolean;
  bg?: boolean;
  wihte?: boolean;
  onclick?: any;
}

const Button = ({ body, icon, hover, bg, wihte, onclick }: btntype) => {
  return (
    <button
      onClick={onclick}
      className={classNames(
        `${s.btn}`,
        { praymry: bg },
        { hover: hover },
        { wihte: wihte }
      )}
    >
      {body} {icon}
    </button>
  );
};

export default Button;
