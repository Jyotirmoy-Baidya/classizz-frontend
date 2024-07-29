import React from 'react'
import { daysOfWeek } from '../../constants';

const ActiveQuizNotification = ({ notification }) => {
    const date = new Date(notification.date);
    const now = new Date();

    const timeAgo = Math.floor(((now - date) / (1000 * 60 * 60)).toFixed(2));
    const daysAgo = ((now - date) / (1000 * 60 * 60 * 24)).toFixed(0);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();

    const dayFormat = `${day}/${month}/${year}`;

    return (
        <div className='grid grid-cols-6 border-b-[1px] border-cyan-300 py-2 w-full notification-block-quiz'>
            <img src={notification.profilePic} alt="others-profile-pic" className='rounded-full col-span-1' height={45} width={35} />
            <div className='text-sm col-span-5 py-[0.1rem]'>
                <div className='text-gray-600 msg'>
                    <span className='font-medium text-black'>{notification.quizName} </span>
                    is active in <span className='font-medium text-black'>{notification.class} </span>
                    .
                </div>
                <div className='flex items-center text-xs justify-between text-gray-400 date'>
                    <div>
                        {
                            daysAgo < 7 ?
                                `${daysOfWeek[date.getDay()]} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}` :
                                `${dayFormat} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
                        }
                    </div>
                    <div className='text-xs tracking-tight'>
                        {
                            timeAgo < 24 ? `${timeAgo} hours ago` : `${daysAgo} days ago`
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ActiveQuizNotification