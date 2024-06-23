const { createContext, useState } = require("react");

export const UserContext = createContext({});

export function UserContextProvider({children}){
    const [userInfo, setUserInfo] = useState({});
    return(
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    );
}


export const RegisterContext = createContext({});

export function RegisterContextProvider({ children }) {
    const [registerInfo, setRegisterInfo] = useState([]);

    return (
        <RegisterContext.Provider value={{ registerInfo, setRegisterInfo }}>
            {children}
        </RegisterContext.Provider>
    );
}