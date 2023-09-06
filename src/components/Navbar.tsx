"use client" 
import React, {useState} from 'react'
import Link from 'next/link';
import Switch from './Switch';
import { useTheme } from 'next-themes';
import './css/Navbar.css';
import { ListBulletIcon, HomeIcon, UserCircleIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const icons = {
    HomeIcon,
    UserCircleIcon,
    ListBulletIcon,
    UserGroupIcon
}


interface NavItem { 
    label:string
    icon: keyof typeof icons,
    page: string
}

const NavbarItem: Array<NavItem> = [
    {
        label: "Home",
        icon: "HomeIcon",
        page: "home",
    },
    {
        label: "About",
        icon: "UserCircleIcon",
        page: "about",
    },
    {
        label: "Experience",
        icon: "ListBulletIcon",
        page: "experience",
    },
    {
        label: "Contact",
        icon: "UserGroupIcon",
        page: "contact",
    },
]


const Navbar = () => {
  return <header>
    <div className='navbar'>
        <div className='items-center'>
            {NavbarItem.map(({icon, label}) => {
                const Icon = icons[icon]
                const labels = label
                return (
                    <div className='icons'>
                        <Icon title={labels} className="h-6 w-6 text-gray-500"/>
                    </div>
                )
            })}
            <div className='toggle'>
                <Switch/>
            </div>
        </div>
    </div>
  </header>
}

export default Navbar;