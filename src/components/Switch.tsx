import React, {useState, useEffect} from 'react';
import './css/Switch.css';
import { useTheme } from 'next-themes';

const Switch = () => {

  const [theme, setTheme] = useState(undefined);

  const handleChange = (e: any) => {
    setTheme(e.target.checked)
  }

  return (
    <label className='switch'>
        <input type='checkbox' onClick={handleChange}/>
        <span className='slider'/>
    </label>
  )
}

export default Switch