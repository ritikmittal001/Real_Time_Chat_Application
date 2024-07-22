import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='flex space-x-6 justify-end bg-orange-200'>
        <Link to='/'><span className='mr-6'>Home</span></Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'><span className='mr-6'>Contact</span></Link>
        <Link to='/user/123'><span className='mr-6'>User</span></Link>
      </div>
      <h1>This is Home page</h1>
    </div>
  )
}

export default Home
