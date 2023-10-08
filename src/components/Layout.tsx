import React, { PropsWithChildren } from "react";
import NavBar from "./Navbar";
const Layout = ({ children }: PropsWithChildren) => {

  return (
    <div className="h-screen flex flex-row justify-start">
    <NavBar/>
    <div className="bg-none flex-1 p-4">
      {children}
    </div>
  </div>
  );
};
export default Layout;