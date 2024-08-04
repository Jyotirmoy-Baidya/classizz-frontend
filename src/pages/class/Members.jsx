import React from 'react'
import { color, students, teachers } from '../../constants'

const Members = () => {
    return (
        <div className='px-2 md:p-4 grid grid-cols-1 md:grid-cols-2 gap-4 h-full'>

            {/* Students  */}

            <hr className='md:hidden block border-cyan-950 order-2 border-dashed ' />
            <div className='h-full px-2 border-r-2 md:order-1 order-3 students-list '>
                <div className='text-xl font-medium text-purple-900  '>Students</div>
                <div className='flex flex-col pt-2 gap-2'>
                    {
                        students.map((ele, i) => (
                            <div key={i} className='py-1 flex items-center gap-3 border-b-2'>
                                <img src={ele.profilePic} alt="profile-pic" className='rounded-full h-10 w-10' />
                                <div>{ele.name}</div>
                                <div className='flex items-center badges'>{
                                    ele.badges?.map((badge, i) => {
                                        if (i < 2)
                                            return <img src={badge} key={i} alt='badges' className='h-8 w-8' />
                                    })

                                }
                                    {ele.badges.length > 2 && <div>+ {ele.badges.length - 2}</div>}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* Teachers  */}
            <div className='h-full px-2 md:order-2 order-1 teachers-list'>
                <div className='text-xl font-medium text-violet-900'>Teachers</div>
                <div className='flex flex-col pt-2 gap-2'>
                    {
                        teachers.map((ele, i) => (
                            <div key={i} className='py-1 flex items-center gap-3 border-b-2'>
                                <img src={ele.profilePic} alt="profile-pic" className='rounded-full h-10 w-10' />
                                <div>{ele.name}</div>
                                <div className='flex items-center gap-2 badges'>{
                                    ele.subjects?.map((sub, i) => (
                                        <div className={`${color[sub.color].bg} py-1 px-3 rounded-full text-xs flex items-center`}>{sub.name}</div>
                                    ))

                                }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Members