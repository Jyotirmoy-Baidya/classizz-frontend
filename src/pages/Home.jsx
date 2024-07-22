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
    const { active } = useNavContext();
    const { search } = useSearchContext();
    return (
        <div className='p-8 h-full'>
            <div className='grid grid-cols-1 sm:grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
                <Outlet />
            </div>
        </div>
    )
}

export default HomePage