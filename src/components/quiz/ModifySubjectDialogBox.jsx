import { RxCross1 } from "react-icons/rx"
import SubjectBlock from "../class/SubjectBlock"
import { IoMdAdd } from "react-icons/io"
import { GiCrossMark } from "react-icons/gi"
import { color } from "../../constants"


const ModifySubjectDialogBox = ({ subject, subjects, editSubject, setEditSubject, addSelectedSubject, removeSelectedSubject }) => {
    return (
        <div className='flex items-center gap-2 cursor-pointer text-gray-500 hover:text-gray-900 col-span-2'>
            {
                subject.length === 0 ?
                    <div className='' onClick={() => setEditSubject(true)}>Select Subject</div>
                    :
                    <div className='flex gap-2'>
                        <div>Subjects: </div>
                        <div className={`${subject.length < 5 ? 'flex' : 'grid grid-cols-4 justify-items-start'} gap-2`}>
                            {
                                subject.map((sub, i) => (
                                    <>
                                        <SubjectBlock key={i} sub={sub} />
                                    </>
                                ))
                            }
                        </div >
                    </div>
            }
            <div className='text-lg' onClick={() => setEditSubject(true)}><IoMdAdd /></div>
            {
                editSubject &&
                <div className='border-[1.5px] shadow-md rounded border-purple-800 bg-white text-black absolute h-36 min-w-72 px-2 py-1 top-0'>
                    <div className='flex justify-between items-center'>Selected Subjects <div onClick={() => setEditSubject(false)}><GiCrossMark /></div></div>
                    <div className='mt-1 flex gap-2' key={1}>
                        {
                            subject.map((sub, i) => (
                                <div className='flex gap-1 items-center' key={i}>
                                    <SubjectBlock sub={sub} key={i} />
                                    <RxCross1 className='text-xs' onClick={() => removeSelectedSubject(sub)} />
                                </div>
                            ))
                        }
                    </div>
                    <hr className='my-3 border-purple-900' />
                    <div className='flex gap-2'>
                        {
                            subjects.filter((sub) => !subject.some(selected => selected.name === sub.name && selected.color === sub.color)).map((sub, i) => (
                                <div className={`text-xs text-black py-1 px-2 ${color[sub.color].bg} ${color[sub.color].border} border rounded-full`} onClick={() => addSelectedSubject(sub)} key={i}>{sub.name}</div>
                            ))
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default ModifySubjectDialogBox