import React, {useEffect, useState} from 'react';
import { useTheme } from 'next-themes';

const Switch = () => {

    const {theme, setTheme} = useTheme()
    const [darkMode, setDarkMode] = useState(false)
    const [active, setActive] = useState(false)
 
    //check if the current theme is existing
    const toggle = (e: any) => {
        if(e.target.checked) {
            setTheme("business")
        }
        else{
            setTheme("light")
        }
    }

    const changeTheme = () => {
        const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
        if(currentTheme) {
            window.localStorage.setItem("theme", theme === 'light' ? 'business' : 'light')
        }
        else {
            window.localStorage.setItem("theme", "business")
        }
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        if(theme === 'light'){
            setActive(false)
        }
        else{
            setActive(true)
        }
    })

    return (
        <label className='switch'>
            <input type='checkbox' checked={active} onChange={toggle} onClick={changeTheme}/>
            <span className='slider'/>
        </label>
    )
}

export default Switch