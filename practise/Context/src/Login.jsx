import React from 'react'
import { useContext } from 'react'
import AuthContext from './AuthContext'

const Login = () => {
    const { login }=useContext(AuthContext);
  return  <button onClick={()=> login('john Doe')}>Login</button>
};

export default Login