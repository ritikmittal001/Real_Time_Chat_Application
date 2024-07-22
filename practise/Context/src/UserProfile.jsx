import React from 'react'
import { useContext } from 'react'
import AuthContext from './AuthContext'

const userProfile = () => {
    const {user}=useContext(AuthContext);
  return (
    <div>
        {user ? <p>Welcome,{user.name}</p>:<p>Please log in</p>}

    </div>
  );
};

export default userProfile