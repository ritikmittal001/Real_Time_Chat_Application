import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
       <div className='flex space-x-6 justify-end mr-6 bg-orange-200 w-full'>
        <Link className='mr-6' to='/'>Home</Link>
        <Link to='/about'><span >About</span></Link>
        <Link to='/contact'><span className='mr-6'>Contact</span></Link>
    </div>
    <h1>
        This is About Page
    </h1>
    </div>
  )
}

export default About