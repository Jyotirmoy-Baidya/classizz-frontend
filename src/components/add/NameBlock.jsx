import React from 'react'

const NameBlock = ({ type, data, setData }) => {
    return (
        <>
            <div>
                <h1 className='text-sm mt-3 mb-1 tracking-wide font-medium text-purple-950'>{type}</h1>
                <input type="text" className='outline-none border-[1px] border-gray-700 bg-slate-100 focus:border-purple-800 focus:border-[2.5px] p-2 h-10 w-96 rounded' value={data} onChange={(e) => setData(e.target.value)} />
            </div>
        </>
    )
}

export default NameBlock