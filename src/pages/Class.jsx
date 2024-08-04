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
            <div className='sticky top-[6.8rem] md:top-20 bg-white z-10 flex w-full p-4 justify-between items-center border-b-[1px] border-slate-300 min-h-[72px]'>
                <h1 className='flex items-center gap-2 font-semibold tracking-wide  text-4xl'><NavLink to="/h/o" className='text-3xl text-purple-700' ><IoMdHome /></NavLink> {classData.name}</h1>
                <div className='absolute w-36 h-32 top-4 right-4'>
                    <div className={`w-36 flex flex-col  cursor-pointer rounded z-10 class-dropdown ${dropdown ? 'active' : ""} `} >
                        <div className='bg-purple-200 flex gap-2 rounded border border-purple-400 w-full z-10 px-4 py-2 items-center justify-between'>
                            <div className=''>
                                {subject ? subject : 'All Subjects'}
                            </div>
                            {dropdown ? <FaAngleUp onClick={() => { setDropdown(false) }} /> : <FaAngleDown onClick={() => { setDropdown(true) }} />}
                        </div>
                        <div className='h-screen relative overflow-hidden'>
                            <div className={`absolute bg-white z-0 ms-4 flex flex-col items-center gap-[2px] class-dropdown-items`}>
                                <div className='py-2 px-4 w-32 border border-slate-300 rounded-sm relative overflow-hidden mt-[2px]' onClick={() => setSubject("")}><span></span>All Subjects</div>
                                {
                                    classData.subjects.map((subject, index) => (
                                        <div className='py-2 px-4 w-32 border border-slate-300 rounded-sm relative overflow-hidden mt-[2px]' key={index} onClick={() => { setSubject(subject); setDropdown(false) }}><span></span>{subject}</div>))
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
                </div>
            </div >
            <Outlet />
        </>
    )
}

export default Class

//class-dropdown ${dropdown ? 'open' : ''}