"use client" 
import React, {useState} from 'react'
import Link from 'next/link';
import Switch from './Switch';
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
    link: string
    idx: number
}

const NavbarItem: Array<NavItem> = [
    {
        label: "Home",
        icon: "HomeIcon",
        link: "/",
        idx: 1
    },
    {
        label: "About",
        icon: "UserCircleIcon",
        link: "/about",
        idx: 2
    },
    {
        label: "Experience",
        icon: "ListBulletIcon",
        link: "/experience",
        idx: 3
    },
    {
        label: "Contact",
        icon: "UserGroupIcon",
        link: "/contact",
        idx: 4
    },
]


const Navbar = () => {
  return <header>
    <div className='navbar'>
        <div className='items-center'>
            {NavbarItem.map(({icon, label, idx, link}) => {
                const Icon = icons[icon]
                const labels = label
                const index = idx
                const href = link
                return (
                    <Link key={index} href={href} className='icons'>
                        <Icon title={labels} className="h-6 w-6 text-gray-500"/>
                    </Link>
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