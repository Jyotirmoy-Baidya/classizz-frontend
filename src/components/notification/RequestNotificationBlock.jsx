import React from 'react'
import { daysOfWeek } from '../../constants';

const RequestNotificationBlock = ({ notification }) => {
    const date = new Date(notification.date);
    const now = new Date();

    const timeAgo = Math.floor(((now - date) / (1000 * 60 * 60)).toFixed(2));
    const daysAgo = ((now - date) / (1000 * 60 * 60 * 24)).toFixed(0);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();

    const dayFormat = `${day}/${month}/${year}`;

    return (
        <div className='grid grid-cols-6 border-b-[1px] border-cyan-300 py-2 w-full notification-block-request'>
            <img src={notification?.profilePic} alt="others-profile-pic" className='rounded-full col-span-1' height={45} width={35} />
            <div className='text-sm col-span-5 py-[0.1rem]'>
                <div className='text-gray-600 msg'>
                    <span className='font-medium text-black'>{notification.personName} </span>
                    requested to join your institute.
                </div>
                <div className='flex items-center justify-between text-xs text-gray-400 date'>
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
                <div className='mt-2 flex w-full gap-2 choose cursor-pointer'>
                    <div className='border rounded py-2  w-full flex justify-center bg-green-300 border-green-600 hover:bg-green-400'>Accept</div>
                    <div className='border rounded py-2 w-full flex justify-center bg-red-300 border-red-600 hover:bg-red-400'>Reject</div>
                </div>
            </div>
        </div>
    )
}

export default RequestNotificationBlock