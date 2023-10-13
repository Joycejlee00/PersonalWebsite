import React from 'react'

export const Buttons = (props : any) => {
  return (
    <ul className='mt-2 flex flex-wrap'>
        <li className='mr-1.5 mt-2'>
            <div className='flex items-center rounded-full bg-gray-400 px-3 py-1 text-xs font-medium text-white'>{props.value}</div>
        </li>
    </ul>
  )
}
