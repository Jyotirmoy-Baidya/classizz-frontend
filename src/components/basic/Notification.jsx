import React from 'react'
import { GiCrossMark } from 'react-icons/gi'
import { daysOfWeek } from '../../constants';
import RequestNotificationBlock from '../notification/RequestNotificationBlock';
import AcceptNotificationBlock from '../notification/AcceptNotificationBlock';
import AnnouncementNotificationBlock from '../notification/AnnouncementNotificationBlock';
import ActiveQuizNotification from '../notification/ActiveQuizNotification';

const Notifications = [
    {
        id: 1,
        type: 'New Request',
        notification: {
            personName: 'Jyotirmoy Baidya',
            profilePic: 'https://randomuser.me/api/portraits/men/9.jpg',
            date: '2024-07-28T00:56:00'
        }
    },
    {
        id: 2,
        type: 'New Request',
        notification: {
            personName: 'Ayesha Khan',
            profilePic: 'https://randomuser.me/api/portraits/women/11.jpg',
            date: '2024-07-22T14:45:00'
        }
    },
    {
        id: 3,
        type: 'Join Request Accepted',
        notification: {
            personName: 'Rajesh Kumar',
            profilePic: 'https://randomuser.me/api/portraits/men/12.jpg',
            date: '2024-07-16T09:15:00'
        }
    },
    {
        id: 4,
        type: 'Announcement',
        notification: {
            personName: 'Anita Sharma',
            class: 'CSE1',
            profilePic: 'https://randomuser.me/api/portraits/women/10.jpg',
            date: '2024-07-01T16:00:00'
        }
    },
    {
        id: 6,
        type: 'Announcement',
        notification: {
            personName: 'Biman Kumar Das',
            class: 'CSE2',
            profilePic: 'https://randomuser.me/api/portraits/men/19.jpg',
            date: '2024-07-01T16:00:00'
        }
    },
    {
        id: 5,
        type: 'Active Quiz',
        notification: {
            personName: 'Suresh Patel',
            profilePic: 'https://randomuser.me/api/portraits/men/13.jpg',
            date: '2024-02-01T11:22:00',
            class: 'CSE3',
            quizName: 'Maths Quiz'
        }
    }
]

const Notification = ({ setNotification }) => {
    return (
        <div className='absolute top-0 left-0 z-20 h-screen w-screen bg-cyan-800 bg-opacity-45'>
            <div className='cursor-pointer bg-white z-20 absolute h-5/6 w-1/4 rounded-md top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col'>
                <div className='px-4 py-3 flex items-center justify-between'>
                    <p className='text-2xl font-medium text-cyan-800'>Notifications</p>
                    <GiCrossMark className='text-cyan-500' onClick={() => setNotification(false)} />
                </div>
                <hr className='border-cyan-500' />
                <div className='grow w-full pt-2 flex flex-col gap-1 px-3 overflow-scroll hide-scrollbar'>
                    {
                        Notifications.map((notification, i) => {
                            if (notification.type === 'New Request') {
                                return <RequestNotificationBlock key={i} notification={notification.notification} />
                            }
                            else if (notification.type === 'Join Request Accepted') {
                                return <AcceptNotificationBlock key={i} notification={notification.notification} />
                            }
                            else if (notification.type === 'Announcement') {
                                return <AnnouncementNotificationBlock key={i} notification={notification.notification} />
                            }
                            else if (notification.type === 'Active Quiz') {
                                return <ActiveQuizNotification key={i} notification={notification.notification} />
                            }
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Notification