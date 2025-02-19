import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {

    const [blogs, setBlogs] = useState();

    useEffect(()=>{
        const fetchBlogs = async () =>{
            try {
                const response = await axios.get("http://localhost:3600/api/blog/GetAll");
                console.log(response);
                setBlogs(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchBlogs();
    }, []);
    return (
        <AuthContext.Provider value = {{blogs}}>{children}</AuthContext.Provider>
    );
};

export const useAuth=()=> useContext(AuthContext);