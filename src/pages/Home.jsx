'use client'
import { useContext } from 'react'
import ClassBlock from '../components/home/ClassBlock';
import { useSearchContext } from '../context/SearchContext';
import { useNavContext } from '../context/NavContext';
import { Outlet } from 'react-router-dom';
import OwnClasses from '../components/home/OwnClasses';



const inst = [
    { className: 'ECE1', c: 5, classOwner: "SPD", noOfStudents: 67 },
    { className: 'ECE2', c: 6, classOwner: "Prasenjit Das", noOfStudents: 90 }
];

const HomePage = () => {
    return (
        <div className='pt-[8.5rem] pb-[7rem] px-4 md:p-8 md:pt-[7rem]'>
            <div className='grid grid-cols-1 sm:grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:gap-10 gap-5'>
                <Outlet />
            </div>
        </div>
    )
}

export default HomePage