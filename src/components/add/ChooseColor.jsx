import React from 'react'

const colors = ['pink', 'teal', 'slate', 'cyan', 'gray', 'orange', 'green'];

const ChooseColor = ({ color, setColor }) => {
    return (
        <div className="mb-4 choose-color">
            <h1 className='text-sm mt-4 mb-1 tracking-wide font-medium text-purple-950'>Select a color</h1>
            <div className="grid grid-cols-8">
                {
                    colors?.map((ele, i) => (
                        <div className={`rounded-full h-8 w-8 bg-${ele}-100 border-[1px] border-${ele}-500 ${color === i ? "border-[2.5px]" : ""} color-selector`} key={i} onClick={(e) => { setColor(i) }}></div>
                    ))
                }
            </div>
        </div>
    )
}

export default ChooseColor