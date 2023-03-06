import React, { ReactNode } from "react";
import Link from "next/link";

import classes from "./Button.module.css";

interface ButtonProps {
  link: string;
  children: ReactNode;
}

const Button = ({ link, children }: ButtonProps) => {
  return (
    <Link href={link} className={classes.btn}>
      {children}
    </Link>
  );
};

export default Button;
