import { useSearchContext } from "../../context/SearchContext";
import ClassBlock from "./ClassBlock";

const own = [
    { className: 'CSE1', classOwner: "Jyoti", c: 0, noOfStudents: 23, code: '123' },
    { className: 'CSE2', classOwner: "Biman", c: 1, noOfStudents: 32, code: '343' },
    { className: 'CSE3', classOwner: "Bhalu", c: 2, noOfStudents: 40, code: '163' },
    { className: 'CSE3', classOwner: "Bhalu", c: 3, noOfStudents: 40, code: '191' },
    { className: 'CSE2', classOwner: "Biman", c: 4, noOfStudents: 32, code: '864' },
    { className: 'CSE1', classOwner: "Jyoti", c: 0, noOfStudents: 23, code: '123' },
    { className: 'CSE2', classOwner: "Biman", c: 1, noOfStudents: 32, code: '343' },
    { className: 'CSE3', classOwner: "Bhalu", c: 2, noOfStudents: 40, code: '163' },
    { className: 'CSE3', classOwner: "Bhalu", c: 3, noOfStudents: 40, code: '191' },
    { className: 'CSE2', classOwner: "Biman", c: 4, noOfStudents: 32, code: '864' }, { className: 'CSE1', classOwner: "Jyoti", c: 0, noOfStudents: 23, code: '123' },
    { className: 'CSE2', classOwner: "Biman", c: 1, noOfStudents: 32, code: '343' },
    { className: 'CSE3', classOwner: "Bhalu", c: 2, noOfStudents: 40, code: '163' },
    { className: 'CSE3', classOwner: "Bhalu", c: 3, noOfStudents: 40, code: '191' },
    { className: 'CSE2', classOwner: "Biman", c: 4, noOfStudents: 32, code: '864' },
];

const OwnClasses = () => {
    const { search } = useSearchContext();
    return (
        <>{
            own?.filter((ele) => ele.className.toLowerCase().includes(search.toLowerCase())).map((ele, i) => (
                <ClassBlock key={i} content={ele} />
            ))
        }</>
    )
}

export default OwnClasses