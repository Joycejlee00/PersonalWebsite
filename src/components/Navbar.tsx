"use client" 
import React, {useState} from 'react'
import Link from 'next/link';
import Switch from './Switch';
import { useTheme } from 'next-themes';
import { ListBulletIcon, HomeIcon, UserCircleIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const icons = {
    HomeIcon,
    UserCircleIcon,
    ListBulletIcon,
    UserGroupIcon
}


interface NavItem { 
    label:string
    icon: keyof typeof icons
    page: string
    idx: number
}

const NavbarItem: Array<NavItem> = [
    {
        label: "Home",
        icon: "HomeIcon",
        page: "home",
        idx: 1
    },
    {
        label: "About",
        icon: "UserCircleIcon",
        page: "about",
        idx: 2
    },
    {
        label: "Experience",
        icon: "ListBulletIcon",
        page: "experience",
        idx: 3
    },
    {
        label: "Contact",
        icon: "UserGroupIcon",
        page: "contact",
        idx: 4
    },
]


const Navbar = () => {
  return <header>
    <div className='navbar'>
        <div className='items-center'>
            {NavbarItem.map(({icon, label, idx}) => {
                const Icon = icons[icon]
                const labels = label
                const index = idx
                return (
                    <div className='icons' key={idx}>
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