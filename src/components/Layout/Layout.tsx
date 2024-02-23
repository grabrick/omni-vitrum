import React, { FC, PropsWithChildren } from "react";
import Footer from "../UI/Footer/Footer";
import m from "./Layout.module.scss";
import Header from "../UI/Header/Header";

const Layout: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <Header />
        <main className={m.main}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
