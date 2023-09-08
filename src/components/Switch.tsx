import React, {useEffect, useState} from 'react';
import { useTheme } from 'next-themes';

const Switch = () => {

    const {theme, setTheme} = useTheme()
 
    //check if the current theme is existing
    const toggle = (e: any) => {
        if(e.target.checked && theme === "light") {
            setTheme("business")
        }
        else{
            setTheme("light")
        }
    }

    return (
        <label className='switch'>
            <input type='checkbox' checked={theme === "light" ? false : true} onChange={toggle} onClick={toggle}/>
            <span className='slider'/>
        </label>
    )
}

export default Switch