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
            <div className='sticky top-[6.8rem] md:top-20 bg-white z-10 flex w-full p-2 md:p-4 justify-between items-center border-b-[1px] border-slate-300 min-h-[72px]'>
                <h1 className='flex items-center gap-2 font-bold tracking-wide text-3xl  md:text-4xl'><NavLink to="/h/o" className='pt-1 text-2xl md:text-3xl text-purple-700' ><IoMdHome /></NavLink> {classData.name}</h1>
                {/* <div className='absolute w-36 h-32 top-4 right-4 text-sm md:text-base'> */}
                <div className={`absolute top-[18px] md:top-4  right-4 w-28 md:w-36 flex flex-col cursor-pointer rounded z-10 text-sm md:text-base class-dropdown ${dropdown ? 'active' : ""} `} >
                    <div className='bg-purple-100 flex gap-2 rounded border border-purple-300 w-full z-10 p-2 md:px-4 md:py-2 items-center justify-between' onClick={() => {
                        setDropdown(!dropdown)
                    }}>
                        <div className=''>
                            {subject ? subject : 'All Subjects'}
                        </div>
                        {dropdown == true ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                    <div className='h-screen relative overflow-hidden'>
                        <div className={`absolute bg-white z-0 md:ms-4 flex flex-col items-center gap-[2px] class-dropdown-items`}>
                            <div className='py-2 px-4 w-28 md:w-32 border border-slate-300 rounded-sm relative overflow-hidden mt-[2px]' onClick={() => { setSubject(""); setDropdown(false) }}><span></span>All Subjects</div>
                            {
                                classData.subjects.map((subject, index) => (
                                    <div className='py-2 px-4 md:py-2 md:px-4 w-28 md:w-32 border border-slate-300 rounded-sm relative overflow-hidden mt-[2px]' key={index} onClick={() => { setSubject(subject); setDropdown(false) }}><span></span>{subject}</div>))
                            }
                        </div>
                    </div>
                    {/* <div className={`top-10 w-36 z-0 h-fit flex flex-col gap-1 class-dropdown-items`}>
                            <div className='py-2 relative overflow-hidden mt-[2px]' onClick={() => setSubject("")}><span></span>All Subjects</div>
                            {
                                classData.subjects.map((subject, index) => (
                                    <div className='py-2 relative overflow-hidden mt-[2px]' key={index} onClick={() => { setSubject(subject); setDropdown(false) }}><span></span>{subject}</div>))
                            }
                        </div> */}
                </div>
                {/* </div> */}
            </div >
            <Outlet />
        </>
    )
}

export default Class

//class-dropdown ${dropdown ? 'open' : ''}