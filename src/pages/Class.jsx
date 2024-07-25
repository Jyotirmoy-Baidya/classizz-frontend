import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useClassContext } from '../context/ClassContext'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { IoMdHome } from 'react-icons/io';

const Class = () => {
    const { classData, subject, setSubject } = useClassContext();
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
            <div className='sticky top-20 bg-white z-10 flex w-full p-4 justify-between items-center border-b-[1px] border-slate-300 min-h-[72px]'>
                <h1 className='flex items-center gap-2 font-semibold tracking-wide  text-4xl'><NavLink to="/h/o" className='text-3xl text-purple-700' ><IoMdHome /></NavLink> {classData.name}</h1>
                <div className='absolute w-36 h-32 top-4 right-4'>
                    <div className={`relative min-h-10 max-h-12 w-36 flex justify-center items-center bg-purple-300 cursor-pointer rounded  class-dropdown ${dropdown ? 'active' : ""} `} onClick={() => { setDropdown(!dropdown); }}>
                        <div className='flex gap-2 w-full min-h-full px-4 items-center justify-between'>
                            <div className='overflow-hidden'>
                                {subject ? subject : 'All Subjects'}
                            </div>
                            {dropdown ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <div className={`absolute top-10 w-36 h-fit class-dropdown-items overflow-hidden`}>
                            <div className='mt-[2px]' onClick={() => setSubject("")}><span></span>All Subjects</div>
                            {
                                classData.subjects.map((subject, index) => (
                                    <div className='mt-[2px]' key={index} onClick={() => setSubject(subject)}><span></span>{subject}</div>))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Class

//class-dropdown ${dropdown ? 'open' : ''}