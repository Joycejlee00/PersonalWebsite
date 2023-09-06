import React, {useState, useEffect} from 'react';
import { useTheme } from 'next-themes';

const Switch = () => {

    const {theme, setTheme} = useTheme()


    const toggle = (e: any) => {
        if(e.target.checked) {
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
    }

    useEffect(() => {
        setTheme("light")
    })

    return (
        <label className='switch'>
            <input type='checkbox' checked={theme === "light" ? false : true} onChange={toggle} />
            <span className='slider'/>
        </label>
    )
}

export default Switch