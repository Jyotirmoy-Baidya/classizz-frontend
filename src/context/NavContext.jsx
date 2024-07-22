/* eslint-disable react/prop-types */
// context/NavContext.js
import { createContext, useContext, useState } from 'react';

const NavContext = createContext();

export const NavContextProvider = ({ children }) => {
    const [active, setActive] = useState(0);
    const [option, setOption] = useState(0);

    return (
        <NavContext.Provider value={{ active, option, setActive, setOption }}>
            {children}
        </NavContext.Provider>
    );
}
export const useNavContext = () => {
    return useContext(NavContext);
};
