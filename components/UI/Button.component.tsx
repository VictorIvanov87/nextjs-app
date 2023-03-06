import React, { ReactNode } from "react";
import Link from "next/link";

import classes from "./Button.module.css";

interface ButtonProps {
  link?: string;
  children: ReactNode;
  onClickCallback?: Function;
}

const Button = ({ link, children, onClickCallback }: ButtonProps) => {
  if (link) {
    return (
      <Link href={link} className={classes.btn}>
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={classes.btn}
        onClick={() => {
          if (onClickCallback) {
            onClickCallback();
          }
        }}
      >
        {children}
      </button>
    );
  }
};

export default Button;
