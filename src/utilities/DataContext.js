import { createContext, useState } from 'react';

const DribbleContext = createContext();

// contex function to to provide context
export const ContextProvider = ({ children }) => {

    const [mainData, setmainData] = useState({
        fullName: "",
        displayName: "",
        homeFullName: "",
        workspaceUrl: "",
        package: "",
    })

    const [changeFormTo, setchangeFormTo] = useState(1)

    return (
        <DribbleContext.Provider value={{
            mainData, setmainData,
            changeFormTo, setchangeFormTo
        }}>
            {children}
        </DribbleContext.Provider>
    )
}

export default DribbleContext;
