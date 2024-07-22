import React,{useContext} from 'react'
import UserContext from '../assets/Context/userContext'


const Profile = () => {
    const {user}=useContext(UserContext)

    if(!user) return <div>Please Login</div>
    return <div>welcome {user.username}</div>
  return (
    <div>Profile</div>
  )
}

export default Profile