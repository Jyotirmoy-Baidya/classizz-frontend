import { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom';
import NavButtons from './NavButtons';
import { useNavContext } from '../../context/NavContext';
import { useClassContext } from '../../context/ClassContext';
const HomeNavItems = [{ name: "OwnClasses", href: "/h/o" }, { name: "Institutes", href: "/h/s" }, { name: "Joined", href: "/h/e" }];
const ClassNavItems = [{ name: "Announcements", href: "/cls/a" }, { name: "Notes", href: "/cls/n" }, { name: "Quiz", href: '/cls/q' }, { name: "Members", href: "cls/m" }];

const QuizNavItems = [{ name: "Create Quiz", href: "/createquiz" }]
const StudentAddClass = [{ name: "Join Class" }]

const Navbar = () => {
    const location = useLocation();
    const navSelection = location.pathname.split('/')[1];
    return (
        <div className='w-[24%] left-0 h-screen max-h-screen bg-purple-100 text-black flex flex-col gap-10'>
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
                                <></>
                }
            </div>
        </div >
    )
}

export default Navbar