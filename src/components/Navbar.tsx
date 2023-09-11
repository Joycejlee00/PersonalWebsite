"use client" 
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import ThemeSwitcher from './ThemeSwitcher';
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
    
    const router = useRouter()
    return (
        <div className='navbar'>
            <div>
                {NavbarItem.map(({icon, label, link}) => {
                    const Icon = icons[icon]
                    const labels = label
                    const href = link
                    return (
                        
                        <Link key={link} href={href}>
                            <div className={`icons ${router.pathname === link ? 'active' : ''}`}>
                                <Icon title={labels}/>
                            </div>
                        </Link>
                    )
                })}
                
                <div className='toggle'>
                    <ThemeSwitcher/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;