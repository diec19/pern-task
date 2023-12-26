import { createContext, useState, useContext } from "react";

import axios from "axios";

export const AuthContext = createContext()

export const useAuth=()=>{
   const context= useContext(AuthContext)
   if (!context){
       throw new Error('seAuth debe usarse dentro de un AuthProvider')

   }
    return context
}

export function AuthProvider({children}){
    const [user, setUser]=useState(null)
    const [isAuth, setIsAuth]=useState(false)
    const [errors,setErrors]=useState(null)

    const signup=async(data)=>{
        const res = await axios.post('http://localhost:3000/api/signup',data,{  
      withCredentials: true,  
    })
    console.log(res.data)
    setUser(res.data)
    }

    const signin=async(data)=>{
        const res = await axios.post("http://localhost:3000/api/signin", data, {
            withCredentials: true,
          });
          console.log(res);
          setUser(res.data)
    }

    return<AuthContext.Provider value={{
        user,
        isAuth,
        errors,
        signup,
        signin
    }}>
        {children}
    </AuthContext.Provider>
}