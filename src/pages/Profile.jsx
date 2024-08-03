import React, { useState } from 'react'
import { BiCross, BiEdit, BiShare } from 'react-icons/bi'
import { FaShare } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { IoMdShareAlt } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import { MdAdd, MdDelete } from 'react-icons/md'
import { useSearchContext } from '../context/SearchContext'
import { color, colors, ownClasses } from '../constants'
import { RxCross1 } from 'react-icons/rx'



const Profile = () => {
    const [addClassDialog, setAddClassDialog] = useState(false);
    const [addSubjectDialog, setAddSubjectDialog] = useState(false);
    const [selectedClass, setSelectedClass] = useState({});
    const [selectedSubjects, setSelectedSubject] = useState([]);
    const { search, setSearch } = useSearchContext();

    const [teacherClassSubjects, setTeacherClassSubjects] = useState([]);
    return (
        <div className='h-full grid grid-cols-1 md:grid-cols-3'>
            <div className='col-span-1 flex flex-col border-r-[1px]'>
                <div className='mt-10 mb-3 mx-auto relative'>
                    <img src="/image.png" alt="" className='w-56 h-56 rounded-full' />
                    <div className='absolute p-2 bg-white backdrop-blur-md bg-opacity-40 right-4 bottom-4 rounded-full'>
                        <BiEdit className='text-xl' />
                    </div>
                </div>
                <div className='px-8 flex flex-col gap-1 details'>
                    <div className='text-2xl font-medium text-cyan-950'>Jyotirmoy Baidya</div>
                    <div className=''>Have an experience of teaching in IIT Kharagpur.</div>
                    <div className='italic text-sm font-normal tracking-wide text-cyan-700'>{'jyotirmoybaidya408@gmail.com'}</div>
                    <hr className='my-1' />
                    <div className='text-gray-700 flex items-center gap-1 text-sm'>Your Institute Code:</div>
                    <div className='flex items-center gap-2'>
                        <div className='text-md tracking-widest py-2 px-2 bg-cyan-50 text-gray-800 font-medium rounded border-2 border-cyan-700'>{'FAX54E'} </div><IoMdShareAlt className='text-xl text-cyan-700' />
                    </div>
                </div>
            </div>
            <div className='p-5 md:p-2 col-span-1 md:col-span-2'>
                <div className='mb-4 badges'>
                    <h2 className='text-2xl font-medium'>My Badges</h2>
                    <hr className='my-1' />
                    <div className='badges-list min-h-12'>
                        <div className='text-sm py-2'>No badges received.</div>
                    </div>
                </div>
                <div className='teachers'>
                    <h2 className='text-2xl font-medium flex items-center gap-2'>Teachers <MdAdd className='text-cyan-700' /></h2>
                    <hr className='my-1' />
                    <div className='flex my-2 h-10 w-full bg-purple-50 px-2 rounded-full border-[1px] search-bar'>
                        <input type="text" className='h-full rounded w-full outline-none px-2 bg-purple-50' placeholder='Search Here' onChange={(e) => setSearch(e.target.value)} value={search} />
                        <button className='search-btn'><IoSearch /></button>
                    </div>
                    <div className='teachers-list min-h-12'>
                        {/* <div className='text-sm py-2'>No teachers in your insititute.</div> */}
                        <div className='flex gap-2 px-2 rounded-lg py-2 border-cyan-700 request-block border bg-gray-50'>
                            <div className='flex self-start items-center gap-2 border-r-2 border-gray-500'>
                                <img src={'/image.png'} className='h-9 w-9 rounded-full' alt="" />
                                <div className='pr-2 '>Biman Kumar Das</div>
                            </div>
                            <div className='grow grid grid-cols-5 gap-3'>
                                {
                                    teacherClassSubjects.length > 0 &&
                                    <>{
                                        teacherClassSubjects.map((cls, i) => (
                                            <React.Fragment key={i}>
                                                <div className={`flex items-center ${colors[cls.c].bg_color} justify-center rounded cursor-pointer h-10`}>
                                                    {cls.className}</div>
                                                <div className='grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 col-span-3 justify-center rounded cursor-pointer' >{
                                                    cls.subjects.map((ele, i) => {
                                                        return <div className={`text-xs rounded-full flex justify-center items-center ${color[ele.color].bg} border-[1px] ${color[ele.color].border} grow h-7 w-full`} key={i}>{ele.name}</div>
                                                    })
                                                }
                                                </div>
                                                <div className='bg-red-200 p-1 text-sm rounded border border-red-500 my-auto max-h-16'>Remove from class</div>
                                                <hr className='col-span-5' />
                                            </React.Fragment>
                                        ))
                                    }
                                    </>
                                }
                                <>

                                    <div className='relative bg-gray-200 flex justify-center rounded cursor-pointer' >
                                        <div onClick={() => setAddClassDialog(true)}>Select Class</div>
                                        {
                                            addClassDialog &&
                                            <div className='absolute w-full p-1 flex flex-col top-7 border bg-white border-gray-700 max-h-40 rounded overflow-scroll hide-scrollbar'>
                                                {
                                                    ownClasses.map((cls, i) => (
                                                        <React.Fragment key={i}>
                                                            <div className={`border-b-[1px] ${colors[cls.c].bg_color} py-2 flex justify-center border-gray-600`} onClick={() => { setSelectedClass(cls); setAddClassDialog(false); setAddSubjectDialog(true) }}>{cls.className}</div>
                                                            <hr />
                                                        </React.Fragment>
                                                    ))
                                                }
                                            </div>
                                        }
                                    </div>
                                    <div className='relative w-full bg-gray-200 rounded flex justify-center col-span-3 cursor-pointer' >
                                        Select Subject
                                        {
                                            addSubjectDialog &&
                                            <div className='absolute border bg-white flex flex-col gap-2 border-gray-700 w-full top-7 p-1  rounded'>
                                                {
                                                    selectedSubjects.length > 0 &&
                                                    <>

                                                        <div className='grid grid-cols-2 gap-2'>
                                                            {
                                                                selectedSubjects.map((sub, i) => (
                                                                    <React.Fragment key={i}>
                                                                        <div className={`mx-1 rounded-lg border-b-[1px] ${color[sub.color].bg} py-2 flex items-center gap-2 justify-center border-gray-600`} >{sub.name} <RxCross1 className='text' onClick={() => setSelectedSubject(selectedSubjects.filter((sub1) => sub.name != sub1.name))} /></div>
                                                                    </React.Fragment>
                                                                ))
                                                            }
                                                        </div>
                                                        <hr />
                                                    </>
                                                }
                                                <div className='grid grid-cols-2 gap-2 max-h-40 grow bg-white  overflow-scroll hide-scrollbar'>
                                                    {
                                                        selectedClass.subjects.filter((sub) => !selectedSubjects.some(selected => selected.name === sub.name && selected.color === sub.color)).map((sub, i) => (
                                                            <React.Fragment key={i}>
                                                                <div className={`mx-1 rounded-lg border-b-[1px] ${color[sub.color].bg} py-2 flex justify-center border-gray-600`} onClick={() => setSelectedSubject(selectedSubjects.concat(sub))}>{sub.name}</div>
                                                            </React.Fragment>
                                                        ))
                                                    }

                                                </div>

                                                <div className='bg-white w-full flex gap-3 justify-evenly '>
                                                    <div className='border border-green-600 bg-green-400 px-2 py-1 rounded' onClick={() => {
                                                        setTeacherClassSubjects(teacherClassSubjects.concat({
                                                            className: selectedClass.className,
                                                            c: selectedClass.c,
                                                            subjects: selectedSubjects
                                                        })); setAddSubjectDialog(false);
                                                        setSelectedClass({});
                                                        setSelectedSubject([]);
                                                    }}>Save</div>

                                                    <div className='border border-red-600 bg-red-300 px-2 py-1 rounded'>Cancel</div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className='col-span-1'>Test</div>

                                </>
                            </div>
                        </div>
                    </div>

                    {/* <div className='px-4 my-3 requests'>
                        <p>Received Requests</p>
                        <div className='grid grid-cols-3 gap-2 request-list'>

                            <div className='flex gap-2 py-1 items-center px-2 rounded border-cyan-700 request-block border'>
                                <img src={'/image.png'} className='h-9 w-9 rounded-full' alt="" />
                                <div>Biman Kumar Das</div>
                                <div className='flex gap-2 items-center buttons'>
                                    <TiTick className='text-3xl text-green-500' />
                                    <ImCross className=' text-red-500' />
                                </div>
                            </div>

                            <div className='flex gap-2 items-center request-block border px-2 rounded border-cyan-700'>
                                <img src={'/image.png'} className='h-9 w-9 rounded-full' alt="" />
                                <div>Biman Kumar Das</div>
                                <div className='flex gap-2 items-center buttons'>
                                    <TiTick className='text-3xl text-green-500' />
                                    <ImCross className=' text-red-500' />
                                </div>
                            </div>

                            <div className='flex gap-2 px-2 rounded border-cyan-700 items-center request-block border'>
                                <img src={'/image.png'} className='h-9 w-9 rounded-full' alt="" />
                                <div>Biman Kumar Das</div>
                                <div className='flex gap-2 items-center buttons'>
                                    <TiTick className='text-3xl text-green-500' />
                                    <ImCross className=' text-red-500' />
                                </div>
                            </div>

                        </div>
                    </div> */}
                </div>
            </div>
        </div >
    )
}

export default Profile