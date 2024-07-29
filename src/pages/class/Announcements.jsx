import React, { useEffect, useState } from 'react'
import { useClassContext } from '../../context/ClassContext'
import { daysOfWeek } from '../../constants';
import { useParams } from 'react-router-dom';

function reverseDateFormat(dateStr) {
    let parts = dateStr.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

const Announcements = () => {
    const { subject, announcementLists } = useClassContext();
    const [annoucementsToDisplay, setAnnoucementsToDisplay] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        let filteredData = announcementLists;
        if (subject != '') {
            filteredData = announcementLists.filter(item => {
                if (item.announcements.filter(ele => ele.subject === subject).length != 0) {
                    return item.announcements = item.announcements.filter(ele => ele.subject === subject);
                }
            });
        }
        setAnnoucementsToDisplay(filteredData);
    }, [subject, announcementLists])
    return (
        <div className='flex flex-col'>
            {
                annoucementsToDisplay.map((ele, i) => (
                    <div className='each-day-block mb-3' key={i}>
                        <div className='py-5 relative date-block'>
                            <hr className='w-full bg-slate-200 border-none h-[1px]' />
                            <div className='absolute top-[10px] font-sans text-slate-600 px-2 left-3 bg-white text-sm date'>{daysOfWeek[(new Date(ele.date)).getDay()]} {reverseDateFormat(ele.date)}</div>
                        </div>
                        {/* sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 */}
                        <div className='px-3 grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 annoucements'>
                            {/* min-w-64 max-w-72 */}
                            {
                                ele.announcements.map((notice, i) => (
                                    <div key={i} className='p-3 min-h-40 min-w-60 max-w-96 h-fit rounded-md border-2 border-rose-500 relative overflow-x-hidden cursor-pointer announcement-block'>
                                        <span></span>
                                        <div className='flex justify-between items-center pb-1 heading'>
                                            <div className='flex items-center gap-1 '>
                                                <div><img src="/image.png" alt="profile-pic" className="rounded-full border-[1px] border-black" height={35} width={35} /></div>
                                                <div className='flex flex-col'>
                                                    <div className='text-[16px] font-medium tracking-wide'>{notice.title}</div>
                                                    <div className='text-xs pb-[4px]'>{notice.dataCreator}</div>
                                                </div>
                                            </div>
                                            <div className='text-xs py-1 px-2 rounded-full bg-green-400'>{notice.subject}</div>
                                        </div>
                                        <hr />
                                        <div className='text-[14px] text-slate-900 pt-1'>{notice.description}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Announcements