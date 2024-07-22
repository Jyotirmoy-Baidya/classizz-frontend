import React from 'react'
import { useSearchContext } from '../../context/SearchContext';
import ClassBlock from './ClassBlock';


const inst = [
    { className: 'ECE1', c: 5, classOwner: "SPD", noOfStudents: 67 },
    { className: 'ECE2', c: 6, classOwner: "Prasenjit Das", noOfStudents: 90 }
];

const JoinedInsititutes = () => {
    const { search } = useSearchContext();
    return (
        <>{
            inst?.filter((ele) => ele.className.toLowerCase().includes(search.toLowerCase())).map((ele, i) => (
                <ClassBlock key={i} content={ele} />
            ))
        }</>
    )
}

export default JoinedInsititutes