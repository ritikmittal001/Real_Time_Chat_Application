import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {userId}=useParams();
    const [user,setUser]=useState(null);
    useEffect(() => {
        // Example fetch call to fetch user data based on userId
        const fetchUser = async () => {
          try {
            const response = await fetch(`https://api.example.com/users/${userId}`);
            if (response.ok) {
              const userData = await response.json();
              setUser(userData);
            } else {
              throw new Error('Failed to fetch user data');
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchUser();
      }, [userId]);
    
      if (!user) {
        return <div>Loading...</div>;
      }

  return (
    <div>
        <h1>User Details</h1>
        <p>Name:{user.name}</p>
        <p>Email:{user.email}</p>

    </div>
  )
}

export default User