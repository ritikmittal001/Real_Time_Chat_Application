import React from 'react'
import UserProfileCard from './UserProfileCard'

const App = () => {
  const user=[
    {
    name:'Ritik Mittal',
    bio:'FUll Stack Developer',
    profilePicture:'https://media.istockphoto.com/id/1469706272/photo/web-design-coding-and-asian-man-with-a-computer-for-programming-a-website-at-night-cyber.webp?b=1&s=170667a&w=0&k=20&c=7_2joeyiBtZQ_y-OhD-qxIh5cgeI5MXqgk87O7tjNZs='
  },
  {
    name:'Golu Mittal',
    bio:'Mern Stack Developer',
    profilePicture:'https://media.istockphoto.com/id/1469706272/photo/web-design-coding-and-asian-man-with-a-computer-for-programming-a-website-at-night-cyber.webp?b=1&s=170667a&w=0&k=20&c=7_2joeyiBtZQ_y-OhD-qxIh5cgeI5MXqgk87O7tjNZs='
  },
  {
    name:'Golu Mittal',
    bio:'Mern Stack Developer',
    profilePicture:'https://media.istockphoto.com/id/1469706272/photo/web-design-coding-and-asian-man-with-a-computer-for-programming-a-website-at-night-cyber.webp?b=1&s=170667a&w=0&k=20&c=7_2joeyiBtZQ_y-OhD-qxIh5cgeI5MXqgk87O7tjNZs='
  }

]
  return (
    <div>
      {user.map((user,index)=>(
        <UserProfileCard
        key={index}
        name={user.name}
        bio={user.bio}
        profilePicture={user.profilePicture}
        />
      ))}
    </div>
  )
}

export default App