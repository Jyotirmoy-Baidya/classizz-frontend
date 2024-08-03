import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { useSearchContext } from "../../context/SearchContext";
import { useState } from "react";
import { AddJoinOptions } from "../../constants";
import { NavLink, useLocation } from "react-router-dom";


function Header({ setPop, setNotification }) {
    const [toggle, setToggle] = useState(false);
    const { search, setSearch } = useSearchContext();

    return (
        <>

            <div className="hidden md:flex sticky top-0 z-20 w-full min-h-20 max-h-20 px-3 items-center justify-between bg-purple-100 text-black">
                <div className='flex h-10 w-72 bg-gray-50 px-2 rounded border-[1px] search-bar'>
                    <input type="text" className='h-full rounded w-full outline-none bg-gray-50' placeholder='Search Here' onChange={(e) => setSearch(e.target.value)} value={search} />
                    <button className='search-btn'><IoSearch /></button>
                </div>
                <div className="flex justify-center items-center text-2xl gap-6">
                    <button onClick={() => setToggle(!toggle)} className={`p-3 rounded-full hover:bg-indigo-800 hover:bg-opacity-20 relative ${toggle ? 'bg-indigo-800 bg-opacity-20' : ''}`}>
                        <MdAdd />
                        {
                            toggle &&
                            <div className="flex flex-col shadow-lg rounded-md w-32 py-2 text-left bg-white right-[18px] text-base tracking-wide absolute ">
                                {
                                    AddJoinOptions.map((type, i) => (<div className="py-2 px-3 hover:bg-slate-100" onClick={() => setPop(i + 1)} key={i}>{type}</div>))
                                }
                            </div>
                        }
                    </button>
                    <div className="notification" onClick={() => setNotification(true)}><FaRegBell /></div>
                    <NavLink to="/profile" className="">
                        <img src="/image.png" alt="profile-pic" className="rounded-full border-[1px] border-black" height={45} width={35} />
                    </NavLink>
                </div>
            </div>

            {/* Mobile view */}
            <div className="flex md:hidden sticky top-0 z-20 w-full px-3 items-center justify-between bg-purple-100 text-black flex-col gap-2">
                <div className='flex mt-3 gap-2 items-center logo'>
                    <img src="/c.jpg" alt='logo' width={40} height={40} />
                    <img src="/name.jpg" alt="name" width={120} height={40} />
                </div>
                <div className='flex my-2 h-10 w-full px-2 rounded-full bg-white border-[1px] search-bar'>
                    <input type="text" className=' rounded-full w-full outline-none' placeholder='Search Here' onChange={(e) => setSearch(e.target.value)} value={search} />
                    <button className='search-btn'><IoSearch /></button>
                </div>
            </div>

        </>
    )
}

export default Header