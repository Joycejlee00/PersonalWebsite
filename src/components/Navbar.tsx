"use client" 
import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import ThemeSwitcher from './ThemeSwitcher';
import { HiHome, HiUserCircle, HiViewList, HiInformationCircle} from "react-icons/hi";
import { motion } from "framer-motion";

const navItems = [
    {
      path: "/",
      icon: HiHome,
      name: "Home",
    },
    {
      path: "/about",
      icon: HiUserCircle,
      name: "About",
    },
    {
      path: "/experience",
      icon: HiViewList,
      name: "Experience",
    },
    {
      path: "/contact",
      icon: HiInformationCircle,
      name: "Contact",
    },
  ];
  
  export default function NavBar() {
    let pathname = useRouter().pathname || "/";
  
    const [activeItem, setActiveItem] = useState(pathname);
  
    return (
      <div className="navbar">
        <nav className="items">
          {navItems.map((item) => {
            const isActive = item.path === pathname;
            return (

              <Link
                key={item.path}
                onClick={() => setActiveItem(item.path)}
                href={item.path}
                className={`${isActive ? "" : "hover:text-zinc-600"} activeItem`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {activeItem === item.path && (
                  <motion.span
                    layoutId="bubble"
                    className="bubble"
                    style={{ borderRadius: 5, left: 40}}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <item.icon size={24} classname={'icons'}/>
              </Link>
            );
          })}

          <div className='themeChange'>
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    );
  }