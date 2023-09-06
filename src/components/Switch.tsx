import React, {useState} from 'react';
import { useTheme } from 'next-themes';

const Switch = () => {

    const {theme, setTheme} = useTheme()
    const [darkMode, setDarkMode] = useState(false);

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

    return (
        <label className='switch'>
            <input type='checkbox' checked={theme === "light" ? false : true} onChange={toggle} onClick={changeTheme}/>
            <span className='slider'/>
        </label>
    )
}

export default Switch