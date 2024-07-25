import React, { useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import SubjectBlock from '../components/class/SubjectBlock';
import { RxCross1 } from 'react-icons/rx';
import { color, colors, ownClasses } from '../constants';
import { GiCrossMark } from 'react-icons/gi';
import ModifySubjectDialogBox from '../components/quiz/ModifySubjectDialogBox';
import { RiCrossLine, RiDeleteBinLine } from 'react-icons/ri';

const subjects = [
    { name: "Chemistry", color: 4 },
    { name: "Physics", color: 1 },
    { name: "English", color: 6 },
    { name: "Math", color: 0 },
    { name: "Biology", color: 5 }
]



const CreateQuiz = () => {
    const [title, setTitle] = useState("Math Quiz");
    const [editTitle, setEditTitle] = useState(false);
    const [desc, setDesc] = useState("This quiz is mandatory. This quiz is mandatory.");
    const [editDesc, setEditDesc] = useState(false);


    const [subject, setSubject] = useState([]);
    const [editSubject, setEditSubject] = useState(false);

    const [classes, setClasses] = useState([{ className: 'CSE1', c: 0, code: 123 }]);
    const [editClass, setEditClass] = useState(false);

    const [questions, setQuestions] = useState[{
        question: "",
        marks: "",
        negative: "",
        options: []
    }];

    const modifyQuestion = (type, data, index) => {

    }


    const addSelectedSubject = (sub) => {
        const selectedSubjects = subject.concat(sub);
        setSubject(selectedSubjects);
    }

    const removeSelectedSubject = (sub) => {
        const selectedSubjects = subject.filter((s) => s.name !== sub.name);
        setSubject(selectedSubjects);
    }

    const addSelectedClass = (cls) => {
        const selectedClass = classes.concat(cls);
        setClasses(selectedClass);
    }

    const removeSelectedClass = (cls) => {
        const selectedClass = classes.filter((c) => c.code != cls.code);
        setClasses(selectedClass);
    }

    return (
        <div className='p-4 w-full'>
            {/* title  */}
            <div className='flex items-center justify-between px-2 border-b-2 w-2/5'>
                <input type="text" value={title} className='text-3xl outline-none' onChange={(e) => { if (editTitle) setTitle(e.target.value) }} onKeyDown={(e) => { if (e.key === 'Enter') setEditTitle(false) }} />
                <AiOutlineEdit className={`${editTitle ? 'text-green-500' : 'text-black'} text-lg`} onClick={() => setEditTitle(!editTitle)} />
            </div>
            {/* description  */}
            <div className='mt-3 flex items-center gap-1 px-2 w-4/5'>
                {editDesc ?
                    <input type="text" value={desc} className='w-3/4 border-2 max-w-full' onChange={(e) => { if (editDesc) setDesc(e.target.value) }} onKeyDown={(e) => { if (e.key === 'Enter') setEditDesc(false) }} /> :
                    <div>{desc}</div>
                }
                <AiOutlineEdit className={`${editDesc ? 'text-green-500' : 'text-black'} text-lg`} onClick={() => setEditDesc(!editTitle)} />
            </div>
            {/* options  */}
            <div className='relative mt-3 mx-3 grid grid-cols-5 items-start gap-6 create-quiz-buttons'>
                <ModifySubjectDialogBox subject={subject} subjects={subjects} editSubject={editSubject} setEditSubject={setEditSubject} addSelectedSubject={addSelectedSubject} removeSelectedSubject={removeSelectedSubject} />
                {/* Selected Classes */}
                <div className='relative flex gap-2 col-span-2'>
                    <div className='text-gray-500'>Classes: </div>
                    <div className='grid gap-2 grid-cols-3'>
                        {classes.map((cls, i) => (
                            <div className={`${colors[cls.c].bg_color} ${colors[cls.c].border_color} flex justify-center items-center rounded border w-auto h-auto px-2 py-2 `}>
                                <div>{cls.className}</div>
                            </div>
                        ))}
                        <div className='flex items-center ps-2 text-xl text-gray-600' onClick={() => setEditClass(true)}><IoMdAdd /></div>
                    </div>
                    {
                        editClass &&
                        <div className='absolute left-14 flex flex-col max-h-80 min-h-60 bg-white border-2 shadow border-slate-500 p-2 rounded z-10'>
                            <p className='mb-1 flex gap-5 items-center justify-between'>Selected Class<GiCrossMark onClick={() => setEditClass(false)} /></p>
                            <hr className='' />
                            <div className='overflow-scroll flex flex-col gap-3 '>

                                <div className='grid grid-cols-3 border-b-2 py-2 border-slate-700 gap-3'>
                                    {
                                        classes.map((cls, i) => (
                                            <div className='bg-green-300 flex justify-center items-center rounded border border-green-600 w-auto h-10 px-2 py-2  cursor-pointer' key={i} onClick={() => removeSelectedClass(cls)}>
                                                <div>{cls.className}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <p className=''>Select Class</p>
                                <div className='grid grid-cols-3 gap-3'>
                                    {
                                        ownClasses.filter((cls, i) => !classes.some((clsSelected) => clsSelected.code == cls.code)).map((cls, i) => (
                                            <div className={`${colors[cls.c].bg_color} flex justify-center items-center rounded border ${colors[cls.c].border_color} w-auto h-10 px-2 py-2 cursor-pointer`} key={i} onClick={() => addSelectedClass(cls)}>
                                                <div>{cls.className}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className=' flex gap-2'>
                    <div className='text-gray-500'>Total Marks: </div>
                    <div className='text-black'>20</div>
                </div>
            </div>
            <div className='mt-3 px-2 flex flex-col questions-list'>
                <div className='border py-3 px-1 rounded-md border-slate-800 question-block'>
                    <div className='relative flex gap-2 question'>
                        <RiDeleteBinLine className='text-red-600 right-2 bottom-0 absolute text-3xl' />
                        <div className='py-[0.4rem]'>{'Q1.'}</div>
                        <div className='grow'>
                            <input type="text" className='border-2 focus:bg-purple-50 focus:border-purple-800 outline-none py-1 px-2 rounded w-full' />
                            <div className='mt-3 flex flex-col gap-2 question-options'>
                                <div className='flex items-center gap-2 option'>
                                    <div className='h-4 w-4 rounded-full border-2 border-green-900 bg-green-400'>
                                    </div>
                                    <input className='outline-none border-b-2' placeholder='Option 1' />
                                </div>
                                <div className='flex items-center gap-2 option'>
                                    <div className='h-4 w-4 rounded-full border-2 border-gray-700 bg-white'>
                                    </div>
                                    <input className='outline-none border-b-2' placeholder='Option 2' />
                                    <IoMdAdd className='text-gray-500' />
                                </div>

                            </div>
                            <div className='flex gap-3 mt-3 question-mark'>
                                <div>Score: </div>
                                <input type="number" className='bg-gray-100 w-16 px-2 h-8 outline-none rounded border border-gray-600' placeholder='2' name="question-score" id="" />
                                <div className='ms-2 text-sm'>Negative Marking(Default:0) : </div>
                                <input type="number" className='bg-gray-100 w-20 px-2 h-8 outline-none rounded border border-gray-600' placeholder='0' name="question-score" id="" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`py-2 px-4 mx-auto border-gray-300 cursor-pointer mt-4 w-36 h-12 flex justify-center items-center hover:bg-purple-950 hover:text-white hover:shadow-lg hover:shadow-purple-950'} rounded-lg border-2`}>Add Question</div>
        </div >
    )
}

export default CreateQuiz