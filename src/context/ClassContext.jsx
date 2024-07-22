import { createContext, useContext, useState } from "react";
import { announcementList } from "../constants";

const ClassContext = createContext();

export const ClassContextProvider = ({ children }) => {
    const [subject, setSubject] = useState("");
    const [classId, setClassId] = useState("");

    const classData = {
        name: "CSE1",
        owner: "Jyoti",
        subjects: ["Maths", "Physics", "Chemistry", "English", "Hindi"],
    }


    const announcementLists = announcementList;

    return (
        <ClassContext.Provider value={{ subject, setSubject, classId, setClassId, classData, announcementLists }}>
            {children}
        </ClassContext.Provider>
    )
}

export const useClassContext = () => {
    return useContext(ClassContext);
}