import React, { createContext } from 'react'
// import { AuthProvider } from './AuthContext'
// import Login from './Login'
// import Logout from './Logout'
// import UserProfile from './UserProfile'
import ChildA from './ChildComponents/ChildA'
import ChildB from './ChildComponents/ChildB';
import ChildC from './ChildComponents/ChildC';


//What is Context Api
//create ,provider ,consumer
const data = createContext();



const App = () => {
  const name = "Ritik";
  return (
   <>
   <data.Provider value={name}>
    <ChildA/>
    {/* <ChildB/>
    <ChildC/> */}
   </data.Provider>
   
   </>
  )
}

export default App
export {data};