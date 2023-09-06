
import React, {useState} from 'react'
import Link from 'next/link';
import { useTheme } from 'next-themes';
import '../styles/navbar.css';
import { HomeModernIcon, IdentificationIcon, ListBulletIcon } from '@heroicons/react/24/solid';

const icons = {
    HomeModernIcon,
    IdentificationIcon,
    ListBulletIcon
}


interface NavItem { 
    label:string
    icon: keyof typeof icons,
    page: string
}

const NavbarItem: Array<NavItem> = [
    {
        label: "Home",
        icon: "HomeModernIcon",
        page: "home",
    },
    {
        label: "About",
        icon: "IdentificationIcon",
        page: "about",
    },
    {
        label: "Experience",
        icon: "ListBulletIcon",
        page: "experience",
    },
]


const Navbar = () => {

  return <header>
    <div className='navbar'>
        <div className='flex flex-col'>
            {NavbarItem.map(({icon}) => {
                const Icon = icons[icon]
                return (
                    <div className=''>
                        <Icon/>
                    </div>
                )
            })}
        </div>
    </div>
  </header>
}

export default Navbar;