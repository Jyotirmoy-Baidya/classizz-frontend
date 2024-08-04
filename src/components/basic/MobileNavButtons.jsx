import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'


const MobileNavButtons = ({ ele, type }) => {
    const location = useLocation();
    return (
        <NavLink to={type == 'Home' ? `${ele.href}` : `${ele.href}/${location.pathname.split('/').at(-1)}`} className={`flex flex-col justify-center items-center  ${location.pathname.includes(ele.href) ? "text-purple-700" : ""}`}>
            <div className='text-2xl'>{ele.icon}</div>
            <div className='text-xs'>{ele.name}</div>
        </NavLink>
    )
}

export default MobileNavButtons