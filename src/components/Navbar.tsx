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
  
    const [hover, setHovered] = useState(pathname);
  
    return (
      <div className="navbar">
        <nav className="items">
          {navItems.map((item) => {
            const isActive = item.path === pathname;
            return (
              <Link
                key={item.path}
                className={`buttons ${
                  isActive ? "" : ""
                }`}
                href={item.path}
                onMouseOver={() => setHovered(item.path)}
                onMouseLeave={() => setHovered(pathname)}
              >
                <item.icon size={22} className={'icons'}/>
                {item.path == hover && (
                  <motion.div
                    className="bubble"
                    layoutId="navbar"
                    aria-hidden="true"
                    style={{
                        width: "100%",
                        height: "37%",
                    }}
                    transition={{
                      type: "just",
                      duration: 0.4,
                    }}
                  />
                )}
              </Link>
            );
          })}

        <div className='themeChange'>
            <ThemeSwitcher/>
        </div>
        </nav>
      </div>
    );
  }