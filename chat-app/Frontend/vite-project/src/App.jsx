import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import Left from './home/LeftPart/Left'
import Right from './home/RightPart/Right'
import { useAuth } from './Context/AuthProvider'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
const App = () => {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
   
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={
          authUser?(<div className='flex h-screen'>
            <Left/>
            <Right/>
          </div>):(
            <Navigate to={"/login"}/>
          )
        }/>
        <Route path='/login' element={authUser?<Navigate to={"/"}/>:<Login/>}/>
        <Route path='/signup' element={authUser?<Navigate to={"/"}/>:<Signup/>}/>
      </Routes>
      </BrowserRouter>
     
     
  )
}

export default App