import { createContext, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children, value }) => {
    const user = {
        name:"Yeison Aquino",
        role: "Admin",
        avatar: "https://img.freepik.com/vector-premium/ordenadores-trabajo-chico_987671-48.jpg"
    }
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)