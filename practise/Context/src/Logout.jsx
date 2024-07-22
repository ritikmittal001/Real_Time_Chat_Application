import React from 'react'
import { useContext } from 'react'
import AuthContext from './AuthContext'

const Logout = () => {
    const { logout} =useContext(AuthContext);
  return  <button onClick={logout}>LogOut</button>
}

export default Logout