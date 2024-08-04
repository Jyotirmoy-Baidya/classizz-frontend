import { useContext, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import NavButtons from './NavButtons';
import { useNavContext } from '../../context/NavContext';
import { useClassContext } from '../../context/ClassContext';
import { BiSolidInstitution } from 'react-icons/bi';
import { FaSchool } from 'react-icons/fa';
import { IoIosMegaphone, IoIosPeople } from 'react-icons/io';
import { IoSchoolSharp } from 'react-icons/io5';
import MobileNavButtons from './MobileNavButtons';
import { VscNotebook } from 'react-icons/vsc';
import { RiCheckboxMultipleFill } from 'react-icons/ri';
import { BsPeopleFill } from 'react-icons/bs';
const HomeNavItems = [{ name: "Own", href: "/h/o", icon: <IoIosPeople /> }, { name: "Institutes", href: "/h/s", icon: <FaSchool /> }, { name: "Class", href: "/h/e", icon: <IoSchoolSharp /> }];
const ClassNavItems = [{ name: "Notices", href: "/cls/a", icon: <IoIosMegaphone /> }, { name: "Notes", href: "/cls/n", icon: <VscNotebook /> }, { name: "Quiz", href: '/cls/q', icon: <RiCheckboxMultipleFill /> }, { name: "Members", href: "cls/m", icon: <BsPeopleFill /> }];

const QuizNavItems = [{ name: "Create Quiz", href: "/createquiz" }]
const StudentAddClass = [{ name: "Join Class" }]

const ProfileNavItems = [{ name: "My Profile", href: "/profile" }]

const Navbar = () => {
    const location = useLocation();
    const navSelection = location.pathname.split('/')[1];
    return (
        <>
            <div className='fixed z-20 hidden md:flex w-[16rem] left-0 h-screen max-h-screen bg-purple-100 text-black flex-col gap-10'>
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
            <div className='flex justify-between text-gray-700 px-8 md:hidden bg-purple-100 h-14 z-20 fixed bottom-0 w-screen'>
                {
                    navSelection === 'h' ? (
                        HomeNavItems.map((ele, i) => (
                            <MobileNavButtons key={i} ele={ele} type={"Home"} />
                        ))
                    ) :
                        navSelection === 'cls' ? (
                            ClassNavItems.map((ele, i) => (
                                <MobileNavButtons key={i} ele={ele} type={"Class"} />
                            ))
                        ) : <></>
                }


            </div>

        </>
    )
}

export default Navbar