"use client" 
import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { usePathname } from "next/navigation";
import ThemeSwitcher from './ThemeSwitcher';
import { ListBulletIcon, HomeIcon, UserCircleIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { motion } from "framer-motion";

const icons = {
    HomeIcon,
    UserCircleIcon,
    ListBulletIcon,
    UserGroupIcon
}


interface NavItem { 
    label:string
    icon: keyof typeof icons
    link: string
}

const NavbarItem: Array<NavItem> = [
    {
        label: "Home",
        icon: "HomeIcon",
        link: "/",
    },
    {
        label: "About",
        icon: "UserCircleIcon",
        link: "/about",
    },
    {
        label: "Experience",
        icon: "ListBulletIcon",
        link: "/experience",
    },
    {
        label: "Contact",
        icon: "UserGroupIcon",
        link: "/contact",
    },
]

const Navbar = () => {


    let pathname = useRouter().pathname || "/";

    if (pathname === ("/")) {
      pathname = "/";
    }

    const [hoveredPath, setHoveredPath] = useState(pathname);

    return (
        <div className='navbar'>
            <div>

            {NavbarItem.map((item) => {
                const isActive = item.link === pathname;
                const Icon = icons[item.icon]
          
                return (
                    <Link
                    key={item.link}
                    // className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                    //     isActive ? "text-orange-600" : "text-lime-600"
                    //   }`}
                    data-active={isActive}
                    href={item.link}
                    onMouseOver={() => setHoveredPath(item.link)}
                    onMouseLeave={() => setHoveredPath(pathname)}
                    >
                    <span><Icon className={`icons ${pathname === item.link ? 'active' : ''}`}/></span>
                    {item.link === hoveredPath && (
                        <motion.div
                        className="absolute bottom-0 left-0 h-full bg-stone-800/80 rounded-md -z-10"
                        layoutId="navbar-item"
                        aria-hidden="true"
                        style={{
                            width: "100%",
                        }}
                        transition={{
                            type: "spring",
                            bounce: 0.25,
                            stiffness: 130,
                            damping: 9,
                            duration: 0.3,
                        }}
                        />
                    )}
                </Link>
                );
             })}

                 {/* {NavbarItem.map((navItem) => {
                //     const Icon = icons[navItem.icon]
                //     return (
                        
                //         <Link key={navItem.link} href={navItem.link}>
                //             <div className={`icons ${router.pathname === navItem.link ? 'active' : ''}`}>
                //                 <Icon title={navItem.label}/>
                //             </div>
                //         </Link>
                //     )
                // })} */}

                <div className='toggle'>
                    <ThemeSwitcher/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;