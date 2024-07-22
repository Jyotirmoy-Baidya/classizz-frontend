import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'

const NavButtons = ({ name, href, type }) => {
    const location = useLocation();

    return (
        <NavLink to={type == 'Home' ? `${href}` : `${href}/${location.pathname.split('/').at(-1)}`} className={`py-2 px-4 border-gray-300 cursor-pointer ${location.pathname.includes(href) ? "bg-purple-950 text-white shadow-sm shadow-purple-950 border-white" : ""} nav-btns nav-btn-animation`
        } ><span></span>{name}</NavLink>
    )
}

export default NavButtons