import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;