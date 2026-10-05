import {  createContext, useState ,useEffect} from "react";
import { getMe } from "./services/auth.api";

export const authContext=createContext()

export const AuthProvider=({children})=>{
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getAndSetUser = async () => {
    try {
        setLoading(true);

        const data = await getMe();

        setUser(data.user);
    } catch (error) {
        console.log("No authenticated user");

        setUser(null);
    } finally {
        setLoading(false);
    }
};
        getAndSetUser()

    },[])
    return(
        <authContext.Provider value={{user,setUser,loading,setLoading}}>
            {children}
        </authContext.Provider>
    )

}