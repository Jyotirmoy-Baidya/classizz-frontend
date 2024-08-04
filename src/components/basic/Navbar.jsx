import { useContext, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import NavButtons from './NavButtons';
import { useNavContext } from '../../context/NavContext';
import { useClassContext } from '../../context/ClassContext';
import { BiSolidInstitution } from 'react-icons/bi';
import { FaSchool } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { IoSchoolSharp } from 'react-icons/io5';
const HomeNavItems = [{ name: "Own", href: "/h/o", icon: <IoIosPeople /> }, { name: "Institutes", href: "/h/s", icon: <FaSchool /> }, { name: "Class", href: "/h/e", icon: <IoSchoolSharp /> }];
const ClassNavItems = [{ name: "Announcements", href: "/cls/a" }, { name: "Notes", href: "/cls/n" }, { name: "Quiz", href: '/cls/q' }, { name: "Members", href: "cls/m" }];

const QuizNavItems = [{ name: "Create Quiz", href: "/createquiz" }]
const StudentAddClass = [{ name: "Join Class" }]

const ProfileNavItems = [{ name: "My Profile", href: "/profile" }]

const Navbar = () => {
    const location = useLocation();
    const navSelection = location.pathname.split('/')[1];
    return (
        <>
            <div className='hidden md:flex w-[24%] left-0 h-screen max-h-screen bg-purple-100 text-black flex-col gap-10'>
                <div className='flex m-4 gap-2 items-center logo'>
                    <img src="/c.jpg" alt='logo' width={40} height={40} />
                    <img src="/name.jpg" alt="name" width={120} height={40} />
                </div>
                <div className='flex flex-col gap-5 w-11/12'>
                    {
                        navSelection === 'h' ? (
                            HomeNavItems.map((ele, i) => (
                                <NavButtons href={ele.href} name={ele.name} key={i} type={"Home"} />
                            ))
                        ) :
                            navSelection === 'cls' ? (
                                ClassNavItems.map((ele, i) => (
                                    <NavButtons href={ele.href} name={ele.name} key={i} type={"Class"} />
                                ))
                            ) :
                                navSelection === 'createquiz' ? (
                                    QuizNavItems.map((ele, i) => (
                                        <NavButtons href={ele.href} name={ele.name} key={i} type={"Class"} />
                                    ))
                                ) :
                                    navSelection === 'profile' ? (
                                        ProfileNavItems.map((ele, i) => (
                                            <NavButtons href={ele.href} name={ele.name} key={i} type={"Class"} />
                                        ))
                                    ) :
                                        <></>
                    }
                </div>
            </div >


            {/* Mobile View  */}
            <div className='flex justify-between text-gray-700 px-6 md:hidden bg-purple-100 h-14 z-20 fixed bottom-0 w-screen'>
                {
                    HomeNavItems.map((ele, i) => (
                        <NavLink to={ele.href} className={`flex flex-col justify-center items-center  ${location.pathname.includes(ele.href) ? "text-purple-700" : ""}`}>
                            <div className='text-2xl'>{ele.icon}</div>
                            <div className='text-xs'>{ele.name}</div>
                        </NavLink>
                    ))
                }

            </div>

        </>
    )
}

export default Navbar