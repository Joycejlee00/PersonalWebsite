import React, { PropsWithChildren } from "react";
import NavBar from "./Navbar";
import Head from 'next/head'
import { useRouter } from "next/router";

const Layout = ({ children }: PropsWithChildren) => {

  const current = useRouter().pathname;

  return (
    <div className="h-screen flex flex-row justify-start">
      <Head>
        <title>
        {current === "/" ? "Joyce Lee" : `${current.charAt(1).toUpperCase() + current.slice(2)}`}
        </title>
      <link rel='icon' type="image/png" href='J-logos_black.png'/>
    </Head>
    <NavBar/>
    <div className="bg-none flex-1 p-4">
      {children}
    </div>
  </div>
  );
};
export default Layout;