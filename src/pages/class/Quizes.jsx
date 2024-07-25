import React, { useEffect, useState } from 'react'
import { FaChevronRight } from 'react-icons/fa';
import { quizes } from '../../constants';
import { GiCrossMark } from 'react-icons/gi';
import { useSearchContext } from '../../context/SearchContext';
import { NavLink } from 'react-router-dom';
import SubjectBlock from '../../components/class/SubjectBlock';

const Quizes = () => {
    const [active, setActive] = useState(0);
    const [quizActive, setQuizActive] = useState(true);
    const [quizPop, setQuizPop] = useState(false);

    const { search } = useSearchContext();
    const completed = false;

    return (
        <>
            <div className={`grid grid-cols-2 gap-5 p-5 pr-0 z-[2] quizes-list`}>
                <NavLink to='/createquiz' className='absolute cursor-pointer border-yellow-600 border-4 bottom-6 right-6 rounded bg-yellow-400 py-3 px-4 shadow'>Create Quiz</NavLink>
                {
                    quizes.map((ele, i) => {
                        if (ele.quizName.toLowerCase().includes(search.toLowerCase()))
                            return (
                                <div className={`p-3 ps-8 h-14 cursor-pointer flex gap-4 items-center rounded-md border-[3px] border-slate-200 relative quiz-block ${active === i + 1 && 'shadow-lg active z-30'} ${i == 0 && 'quiz-live'} overflow-hidden`} onClick={() => { setActive(i + 1); setQuizPop(true) }}>
                                    <span className='quiz-block-span'>
                                        <div className='absolute top-1/2 -translate-y-2 '><FaChevronRight /></div>
                                    </span>
                                    <div className='text-lg'>{ele.quizName}</div>
                                    {
                                        ele.subjects?.map((sub, i) => (
                                            <SubjectBlock sub={sub} />
                                        ))
                                    }
                                    <div className='ms-auto text-sm me-4'>Total marks: {ele.totalMarks}</div>
                                </div>
                            )
                    })
                }
            </div>
            {
                quizPop === true ? (
                    <div className='fixed h-screen w-screen left-0 right-0 z-30 flex justify-center items-center bg-slate-400 bg-opacity-30'>
                        <div className={`${active != 0 && 'active'} h-[90%] w-1/3 flex flex-col bg-blue-50 shadow shadow-slate-700 rounded-md relative`}>
                            <div className='absolute top-4 right-4 z-20' onClick={() => { setQuizPop(false); setActive(0) }}><GiCrossMark /></div>
                            <div className='p-4 flex flex-col items-center gap-2 z-10'>
                                <div className='py-1 text-2xl text-white text-center tracking-wide font-medium uppercase quiz-heading'>Quiz Details</div>
                                <div className='bg-green-400 w-1/3 py-4 flex justify-center items-center rounded-xl text-xl  text-white font-medium font-san tracking-wide shadow-lg shadow-slate-500'>Maths Basic</div>
                            </div>
                            <span className='rounded-b-3xl h-[16%] bg-blue-300 absolute top-0 shadow-lg w-full'></span>
                            <div className='h-full'>
                                <div className='grid grid-cols-2 gap-4 p-4 quiz-body'>
                                    <div className='flex items-center'>Total Marks: <span className={` py-[2px] px-3 text-lg flex items-center`}>100</span></div>
                                    <div className='flex items-center gap-2'>Dificulty: <span className={`${'easy' == 'easy' && 'bg-green-400'} py-1 px-3 rounded-full text-xs flex items-center`}>Easy</span></div>
                                    <div className='flex items-center gap-2'>Status: <span className={`${quizActive ? 'bg-green-400' : completed ? 'bg-blue-300' : 'bg-red-400'} py-1 px-3 rounded-full text-xs flex items-center`}>{quizActive ? 'Active' : completed ? 'Completed' : 'Inactive'}</span></div>
                                    <div className='flex items-center'>Subject: <span className={` py-1 px-3 rounded-full  flex items-center`}>Physics</span></div>
                                    <div className='flex items-center gap-2'>No Of Students Attempted: <span className={` py-1 px-2 rounded-md  flex items-center border-2 border-red-500`}>23/50</span></div>
                                </div>
                                <div className='w-full flex justify-center'>
                                    <button className={`${quizActive ? 'bg-green-400 border-green-600' : 'bg-red-400 border-red-600'} py-2 px-3 rounded shadow-md border-[2px]`}>{quizActive ? 'Start Quiz' : completed ? 'Quiz Ended' : 'Quiz Not Started'}</button>
                                </div>
                                <div className='flex flex-col h-[43%] my-2 mx-3'>
                                    <div>Students</div>
                                    <div className='shadow-inner grid gap-2 p-2 grid-cols-2 rounded-md bg-white overflow-scroll hide-scrollbar'>
                                        <div className='flex items-center px-2 border rounded h-8'>Jyoti 🏁</div>
                                        <div className='flex items-center px-2 border rounded h-8'>Biman ✍</div>
                                        <div className='flex items-center px-2 border rounded h-8'>Saikat 😴</div>
                                        <div className='flex items-center px-2 border rounded h-8'>Jyoti 🏁</div>
                                        <div className='flex items-center px-2 border rounded h-8'>Biman ✍</div>
                                        <div className='flex items-center px-2 border rounded h-8'>Saikat 😴</div>
                                        <div className='flex items-center px-2 border rounded h-8'>Jyoti 🏁</div>
                                        <div className='flex items-center px-2 border rounded h-8'>Biman ✍</div>
                                        <div className='flex items-center px-2 border rounded h-8'>Saikat 😴</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : <></>
            }
        </>
    )
}

export default Quizes