import React, {useEffect, useState} from 'react'
import { useTheme } from 'next-themes';
import {LightBulbIcon} from '@heroicons/react/24/solid';

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
                <LightBulbIcon
                role='button'
                fill='currentColor' 
                onClick={() => setTheme('light')}
                />
            );
        }
        else{
            return (
                <LightBulbIcon
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