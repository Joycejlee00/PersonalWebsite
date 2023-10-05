import React, {useEffect, useState} from 'react'
import { useTheme } from 'next-themes';
import { HiLightBulb } from "react-icons/hi";

const ThemeSwitcher = () => {


    const {systemTheme, theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
    setMounted(true);
    }, []);

    const changeTheme = () => {
        if(!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme;

        if(currentTheme === 'business'){
            return (
                <HiLightBulb
                role='button'
                fill='currentColor' 
                onClick={() => setTheme('light')}
                />
            );
        }
        else{
            return (
                <HiLightBulb
                role='button'
                fill='currentColor'
                onClick={() => setTheme('business')}
                />
            )
        }
    }

    return (
        <div>
            {changeTheme()}
        </div>
    )
}

export default ThemeSwitcher