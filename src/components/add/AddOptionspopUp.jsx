import React, { useState } from 'react'
import { GiCrossMark } from 'react-icons/gi'
import { AddJoinOptions } from '../../constants'
import NameBlock from './NameBlock';
import ChooseColor from './ChooseColor';

const AddOptionspopUp = ({ pop, setPop }) => {
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [color, setColor] = useState(0);
    return (
        <div className='fixed bg-slate-700 bg-opacity-30 h-screen w-screen flex justify-center py-32'>
            <div className='bg-slate-300 p-1 shadow-xl rounded'>
                <div className='shadow-lg h-full bg-white rounded p-4'>
                    <div className='flex flex-col pb-3 border-b-2 gap-3 header'>
                        <div className='w-full flex justify-end' onClick={() => setPop(0)}><GiCrossMark /></div>
                        <div className='w-full flex justify-evenly'>
                            {
                                AddJoinOptions.map((type, i) =>
                                (
                                    <p className={`py-2 px-4 border-gray-300 cursor-pointer ${pop === i + 1 && 'bg-purple-950 text-white shadow-sm shadow-purple-950'} rounded-lg border-2`} onClick={() => setPop(i + 1)}>{type}</p>
                                ))
                            }
                        </div>
                    </div>
                    <div className='h-full'>
                        {/* ADD CLASS  */}
                        {
                            pop === 1 ?
                                <div className='flex flex-col mb-5'>
                                    <NameBlock type={"Create your own class."} data={name} setData={setName} />
                                    <ChooseColor color={color} setColor={setColor} />
                                    <button className={`mt-auto w-1/2 rounded self-center border-2 p-3 ${name && 'bg-green-400 shadow-md border-green-800'}`}>Create Class</button>
                                </div> : <></>
                        }
                        {/* Join Institute  */}
                        {
                            pop === 2 ?
                                <div className='flex flex-col gap-5 mb-5'>
                                    <NameBlock type={"Enter code to join insititute."} data={code} setData={setCode} />
                                    <button className={`mt-auto w-1/2 rounded self-center border-2 p-3 ${code && 'bg-green-400 shadow-md border-green-800'}`}>Send Request</button>
                                </div> : <></>
                        }
                        {/* Join Class  */}
                        {
                            pop === 3 ?
                                <div className='flex flex-col gap-5 mb-5'>
                                    <NameBlock type={"Enter code to join class."} data={code} setData={setCode} />
                                    <button className={`mt-auto w-1/2 rounded self-center border-2 p-3 ${code && 'bg-green-400 shadow-md border-green-800'}`}>Join Class</button>
                                </div> : <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddOptionspopUp