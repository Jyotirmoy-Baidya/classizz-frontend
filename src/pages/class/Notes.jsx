import React, { useState } from 'react'
import { color, notes } from '../../constants';
import { useClassContext } from '../../context/ClassContext';
import { useSearchContext } from '../../context/SearchContext';

const topic = ['ions', 'organic', 'exothemic', 'ions', 'organic', 'exothemic', 'ions', 'organic', 'exothemic']

const Notes = () => {
    const [read, setRead] = useState(0);
    const { subject } = useClassContext();
    const { search } = useSearchContext();
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 h-full p-4 justify-center'>
            {
                notes.map((ele, i) => {
                    if (subject == "" || ele.subject == subject) {

                        return (
                            <div key={i} className={`${color[ele.color].bg} min-h-80 h-fit w-56 px-8 py-6 border-4 ${color[ele.color].border}  shadow-md shadow-slate-500 cursor-pointer mb-5 ${read == i + 1 && 'increase-z'} relative overflow-hidden notes-block`}>
                                <span className={`${color[ele.color].span} notes-block-span`}></span>
                                <div className='uppercase font-semibold text-xl tracking-wider py-2 notes-block-subject'>{ele.subject}</div>
                                <hr className={`${color[ele.color].border} border-slate-600`} />
                                <ul className='px-4 py-2 list-disc note-list'>
                                    {
                                        read === i + 1 || search != '' ?
                                            <>{
                                                ele.topics.map((ele, i) => (
                                                    ele.toLowerCase().includes(search.toLowerCase()) &&
                                                    <li className='capitalize' key={i}>{ele}</li>
                                                ))
                                            }
                                            </> : <>{
                                                ele.topics.slice(0, 5).map((ele, i) => (
                                                    <li className='capitalize' key={i}>{ele}</li>
                                                ))
                                            }
                                            </>
                                    }
                                </ul>
                                {ele.topics.length > 6 && search == '' && <div className='capitalize' onClick={() => {
                                    setRead(read === i + 1 ? 0 : i + 1)
                                }}>{read != i + 1 ? 'See More..' : 'Show Less'}</div>}
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Notes