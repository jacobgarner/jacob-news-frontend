import { createContext, useEffect, useState } from "react";
import { getUsers } from "../api";
export const UserContext = createContext()

export const UserProvider = (props) =>{
    const [currentUser, setCurrentUser] = useState()

    useEffect(()=>{
        getUsers().then((res)=>{
            setCurrentUser(res[0])
        })
    }, [])

    return <UserContext.Provider value={{currentUser}}>{props.children}</UserContext.Provider>
}