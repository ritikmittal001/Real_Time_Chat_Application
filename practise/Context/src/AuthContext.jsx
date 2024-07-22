import React,{createContext,useState} from 'react'

//creating the context
const AuthContext=createContext();
 //AuthProvider component

 export const AuthProvider=({children})=>{
    const[user,setUser]=useState(null);


    //login function
    const login=(username)=>{
        setUser({name:username});
    };

    //logout function
    const logout=()=>{
        setUser(null);
    };

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )

 }

 export default AuthContext;