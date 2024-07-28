import React, { useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import SubjectBlock from '../components/class/SubjectBlock';
import { RxCross1 } from 'react-icons/rx';
import { color, colors, ownClasses } from '../constants';
import { GiCrossMark } from 'react-icons/gi';
import ModifySubjectDialogBox from '../components/quiz/ModifySubjectDialogBox';
import { RiCrossLine, RiDeleteBinLine } from 'react-icons/ri';


const CreateQuiz = () => {
    const [title, setTitle] = useState("Math Quiz");
    const [editTitle, setEditTitle] = useState(false);
    const [desc, setDesc] = useState("This quiz is mandatory. This quiz is mandatory.");
    const [editDesc, setEditDesc] = useState(false);

    const [editSubject, setEditSubject] = useState(0);

    const [classes, setClasses] = useState([ownClasses[0]]);
    const [editClass, setEditClass] = useState(false);

    const [totalMarks, setTotalMarks] = useState(0);

    const [questions, setQuestions] = useState([{
        question: "",
        marks: 0,
        negative: 0,
        options: [
            { data: "", correct: false }
        ]
    }]);

    const qStruct = {
        question: "",
        marks: 0,
        negative: 0,
        options: [
            { data: "", correct: false }
        ]
    }

    const [changed, setChanged] = useState(false);


    const addSelectedSubject = (sub, clsIndex) => {
        setClasses(classes.map((cls, clsI) => clsIndex === clsI ? { ...cls, selectedSubjects: cls.selectedSubjects.concat(sub), subjects: cls.subjects.filter((ele) => ele.name != sub.name) } : cls))
        // let newClasses = classes[clsIndex];
        // let a = classes;
        // newClasses.selectedSubjects = newClasses.selectedSubjects.concat(sub);
        // newClasses.subjects = newClasses.subjects.filter((ele) => ele.name != sub.name)
        // a[clsIndex] = newClasses;
        // setClasses(a);
        // setChanged(!changed);
    }

    const removeSelectedSubject = (sub, clsIndex) => {
        setClasses(classes.map((cls, clsI) => clsIndex === clsI ? { ...cls, selectedSubjects: cls.selectedSubjects.filter((ele) => ele.name != sub.name), subjects: cls.subjects.concat(sub) } : cls))
        // let newClasses = classes[clsIndex];
        // let a = classes;
        // newClasses.selectedSubjects = newClasses.selectedSubjects.filter((ele) => ele.name != sub.name);
        // newClasses.subjects = newClasses.subjects.concat(sub);
        // a[clsIndex] = newClasses;
        // setClasses(a);
        // setChanged(!changed);
    }

    const addSelectedClass = (cls) => {
        const selectedClass = classes.concat(cls);
        setClasses(selectedClass);
    }

    const removeSelectedClass = (cls) => {
        const selectedClass = classes.filter((c) => c.code != cls.code);
        setClasses(selectedClass);
    }

    const addQuestion = () => {
        setQuestions(questions.concat(qStruct));
    }

    const deleteQuestion = (quesIndex) => {
        setQuestions(questions.filter((_, index) => index !== quesIndex));
        calcTotal(questions.filter((_, index) => index !== quesIndex));
    }

    const addOption = (quesIndex) => {
        setQuestions(questions.map((q, i) => i === quesIndex ? { ...q, options: q.options.concat({ data: "", correct: false }) } : q));
    }

    const deleteOption = (quesIndex, optionIndex) => {
        setQuestions(questions.map((q, i) => i === quesIndex ? { ...q, options: q.options.filter((ele, oi) => oi != optionIndex) } : q));
    }

    const setOptionsData = (data, quesIndex, optionIndex) => {
        setQuestions(questions.map((q, i) => i === quesIndex ? { ...q, options: q.options.map((ele, oi) => oi == optionIndex ? { ...ele, data: data } : ele) } : q));
    }

    const setCorrect = (quesIndex, optionIndex) => {
        setQuestions(questions.map((q, i) => i === quesIndex ? { ...q, options: q.options.map((ele, oi) => oi == optionIndex ? { ...ele, correct: !ele.correct } : ele) } : q));
    }

    const calcTotal = (questionsArray) => {
        let total = 0;
        questionsArray.forEach((q, i) => {
            total += q.marks;
        })
        setTotalMarks(total);
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
            {/* Options  */}
            <div className='mt-3 mx-3 grid grid-cols-2 items-start gap-6 create-quiz-buttons'>
                {/* Selecting Class Subject  */}
                <div className='grid grid-cols-5 p-2 gap-2 border-2 relative'>
                    <div className='col-span-2 classes'>Classes</div>
                    <div className='col-span-3 select-subjects'>Subjects</div>
                    {/* Each Class Block With Subjects */}
                    {
                        classes.map((cls, clsIndex) => (
                            <React.Fragment key={clsIndex}>
                                <div className='col-span-2 cursor-pointer selected-class-block'>
                                    <div className='flex items-center gap-1'>
                                        <div className={`grow ${colors[cls.c].bg_color} ${colors[cls.c].border_color} flex justify-center items-center rounded border w-auto h-auto px-2 py-2 `}>
                                            <div>{cls.className}</div>
                                        </div>
                                        <RxCross1 onClick={() => removeSelectedClass(cls)} />
                                    </div>
                                </div>
                                <div className='col-span-3 grid grid-cols-4 gap-2 relative items-center selected-subjects'>
                                    {
                                        cls.selectedSubjects.length === 0 ?
                                            <div className='bg-green-300 py-1 px-1 border col-span-2 col-start-2 border-green-700 rounded flex justify-center items-center gap-2 cursor-pointer' onClick={() => setEditSubject(clsIndex + 1)}>
                                                Add Subjects <IoMdAdd />
                                            </div>
                                            :
                                            <>
                                                {cls.selectedSubjects.map((sub, i) => (
                                                    <div className='w-auto bg-green-400 rounded-full flex justify-center py-1 text-xs' key={i}>{sub.name}</div>
                                                ))
                                                }
                                                <IoMdAdd className='' onClick={() => { setEditSubject(clsIndex + 1); alert(clsIndex + 1) }} />
                                            </>
                                    }

                                    {
                                        editSubject == clsIndex + 1 &&
                                        <div className='border-[1.5px] z-10 shadow-md rounded border-purple-800 bg-white text-black absolute min-h-36 w-full px-2 py-1 top-0'>
                                            <div className='flex justify-between items-center'>Selected Subjects <div onClick={() => setEditSubject(0)}><GiCrossMark /></div></div>
                                            <div className='mt-1 grid grid-cols-3 gap-2' key={1}>
                                                {
                                                    cls.selectedSubjects.map((sub, i) => (
                                                        <div className='flex gap-1 w-full items-center' key={i}>
                                                            <SubjectBlock sub={sub} key={i} />
                                                            <RxCross1 className='text-xs' onClick={() => removeSelectedSubject(sub, clsIndex)} />
                                                        </div>
                                                    ))
                                                }
                                            </div>

                                            <hr className='my-3 border-purple-900' />
                                            <div className='grid grid-cols-4 gap-2'>
                                                {
                                                    cls.subjects.map((sub, i) => (
                                                        <div className={`text-xs text-black py-1 px-2 ${color[sub.color].bg} ${color[sub.color].border} border rounded-full cursor-pointer`} onClick={() => addSelectedSubject(sub, clsIndex)} key={i}>{sub.name}</div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    }
                                </div>
                                <hr className='col-span-5 border-slate-300 border-[1px]' />
                            </React.Fragment>
                        ))
                    }
                    {/* Add Class */}
                    <div className='relative col-span-2'>
                        <div className='border border-red-600 items-center py-1 px-2 rounded flex justify-center bg-red-100 text-gray-800 cursor-pointer hover:bg-red-400 hover:text-black' onClick={() => setEditClass(true)}>
                            <IoMdAdd className='' />
                        </div>
                        {
                            editClass &&
                            <div className='absolute left-0 top-0 flex flex-col max-h-80 min-h-60 bg-white border-2 shadow border-slate-500 p-2 w-full rounded z-10'>
                                <p className='flex justify-between'>Select Class
                                    <GiCrossMark className='' onClick={() => setEditClass(false)} />
                                </p>
                                <hr className='my-2 border-slate-600 mr-4' />
                                <div className='flex flex-col gap-3 grow min-h-full overflow-scroll bg-slate-500'>
                                    {
                                        ownClasses.filter((cls, i) => !classes.some((clsSelected) => clsSelected.code == cls.code)).map((cls, i) => (
                                            <div className={`${colors[cls.c].bg_color} flex justify-center items-center rounded border ${colors[cls.c].border_color} w-auto h-10 px-2 py-2 cursor-pointer`} key={i} onClick={() => { addSelectedClass(cls); setEditClass(false) }}>
                                                <div>{cls.className}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>
                {/* Selecting start time End time duration marks */}
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-3 p-2 '>
                        <div className='text-green-500 font-medium tracking-wide'>Select Quiz Start Time: </div>
                        <input type="datetime-local" className='bg-green-100 border border-green-400 rounded-md p-2' />
                    </div>
                    <div className='flex gap-3 p-2'>
                        <div className='text-red-700 font-medium tracking-wide'>Select Quiz End Time:</div>
                        <input type="datetime-local" className='bg-red-100 border border-red-400 rounded-md p-2' />
                    </div>
                    <div className='flex gap-3 p-2'>
                        <div>Duration(in Mins): </div>
                        <input type="number" placeholder='60mins' className='flex justify-center p-2 border border-blue-400 outline-none bg-blue-100 rounded-md' />
                    </div>
                    <div className='flex gap-2 p-2'>
                        <div className='text-gray-500'>Total Marks: </div>
                        <div className='text-black'>
                            {totalMarks}
                        </div>
                    </div>
                </div>
            </div>

            {/* Questions */}
            <div className='mt-3 px-2 flex flex-col gap-4 questions-list'>
                {
                    questions.map((question, quesIndex) => (
                        <React.Fragment key={quesIndex}>
                            <div className='border py-3 px-2 rounded-md border-blue-950 question-block'>
                                <div className='relative flex gap-2 question'>
                                    <RiDeleteBinLine className='text-red-600 right-2 bottom-0 absolute text-3xl' onClick={() => deleteQuestion(quesIndex)} />
                                    <div className='py-[0.4rem]'>{`Q ${quesIndex + 1}`}</div>
                                    <div className='grow'>
                                        <input type="text" className='border-2 focus:bg-purple-50 focus:border-purple-800 outline-none py-1 px-2 rounded w-full' value={question.question}
                                            onChange={(e) => {
                                                setQuestions(questions.map((q, i) =>
                                                    quesIndex === i ? { ...q, question: e.target.value } : q
                                                ))
                                            }
                                            } />
                                        <div className='mt-3 flex flex-col gap-2 question-options'>
                                            {
                                                question.options.map((option, optionIndex) => (
                                                    <React.Fragment key={optionIndex}>
                                                        <div key={optionIndex} className='flex items-center gap-2 option'>
                                                            <div className={`h-4 w-4 rounded-full border-2 border-green-900 ${option.correct === true ? 'bg-green-400' : ''}`} onClick={() => setCorrect(quesIndex, optionIndex)}>
                                                            </div>
                                                            <input className='outline-none border-b-2' placeholder={`Option ${optionIndex + 1}`} value={option.data} onChange={(e) => setOptionsData(e.target.value, quesIndex, optionIndex)} />
                                                            <RiDeleteBinLine className='text-red-300' onClick={() => deleteOption(quesIndex, optionIndex)} />
                                                            {
                                                                optionIndex === question.options.length -
                                                                1 &&
                                                                <IoMdAdd className='text-gray-500' onClick={() => addOption(quesIndex)} />
                                                            }
                                                        </div>
                                                    </React.Fragment>
                                                ))
                                            }



                                        </div>
                                        <div className='flex gap-3 mt-3 question-mark'>
                                            <div>Score: </div>
                                            <input type="number" className='w-16 px-2 h-8 outline-none rounded border-2 border-green-600 bg-green-100' placeholder='2' name="question-score" id=""
                                                onChange={(e) => {
                                                    const marksUpdated = questions.map((q, i) =>
                                                        quesIndex === i ? { ...q, marks: Number(e.target.value) } : q
                                                    );
                                                    setQuestions(marksUpdated);
                                                    let total = 0;
                                                    marksUpdated.forEach((q, i) => {
                                                        total += q.marks;
                                                    });
                                                    setTotalMarks(total);
                                                }
                                                }
                                            />
                                            <div className='ms-2 text-sm'>Negative Marking(Default:0) : </div>
                                            <input type="number" className='bg-red-100 w-20 px-2 h-8 outline-none rounded border-2 border-red-600' placeholder='0' name="question-score" id="" value={question.negative}
                                                onChange={(e) => {
                                                    // if (questions[quesIndex].marks > e.target.value)
                                                    setQuestions(questions.map((q, i) =>
                                                        quesIndex === i ? { ...q, negative: e.target.value } : q
                                                    ))
                                                    // else
                                                    //     alert("Negative marks cannot exceed the positive marks");
                                                }
                                                } />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
            <div className={`py-2 px-4 mx-auto border-gray-300 cursor-pointer mt-4 w-36 h-12 flex justify-center items-center hover:bg-purple-950 hover:text-white hover:shadow-lg hover:shadow-purple-950'} rounded-lg border-2`} onClick={() => addQuestion()}>Add Question</div>
        </div >
    )
}

export default CreateQuiz