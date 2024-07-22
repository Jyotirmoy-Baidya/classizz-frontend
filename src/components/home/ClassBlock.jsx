/* eslint-disable react/prop-types */
'use client'
import { MdGroups3 } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const colors = [
    { bg_color: 'bg-pink-100', border_color: 'border-pink-500' },
    { bg_color: 'bg-teal-100', border_color: 'border-teal-500' },
    { bg_color: 'bg-slate-100', border_color: 'border-slate-500' },
    { bg_color: 'bg-cyan-100', border_color: 'border-cyan-500' },
    { bg_color: 'bg-gray-100', border_color: 'border-gray-500' },
    { bg_color: 'bg-orange-100', border_color: 'border-orange-500' },
    { bg_color: 'bg-green-100', border_color: 'border-green-500' },
]
const ClassBlock = ({ content }) => {
    return (
        <NavLink to={`/cls/a/${content.code}`} className={`h-36 w-auto min-w-[240px] max-w-[380px] p-6 border-[1px] bg-te ${colors[content.c].bg_color} ${colors[content.c].border_color}  hover:border-[2.5px] cursor-pointer text-black dark:text-slate-700 shrink-0 flex justify-between rounded-md`} >
            <div className="flex flex-col justify-between h-full names">
                <div className="text-2xl tracking-widest font-bold class-name">{content.className}</div>
                <div className="text-lg tracking-wider owner-name">{content.classOwner}</div>
            </div>
            <div className="text-xl flex flex-col items-center gap-2 stundent-count">
                <div className="text-4xl text-slate-700" ><MdGroups3 /></div>
                <div className="font-medium tracking-wider">{content.noOfStudents}</div>
            </div>
        </NavLink>
    )
}

export default ClassBlock