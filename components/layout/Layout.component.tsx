import React, { ReactNode } from "react";
import MainHeader from "./MainHeader.component";

import classes from './Layout.module.css'

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <MainHeader />
      <main className={classes.mainSection}>{children}</main>
    </>
  );
};

export default Layout;
