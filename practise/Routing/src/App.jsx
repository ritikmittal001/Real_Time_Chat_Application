import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import About from './Component/About'
import Home from './Component/Home'
import Contact from './Component/Contact'
import User from './Component/User';
import Counter from './Component/Counter'
import FetchData from './Component/FetchData'
import Timer from './Component/Timer'
import User_one from './Component/User_one'

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/user/:userId' element={<User/>}/>
      </Routes>
      </BrowserRouter> */}
      {/* <Counter/> */}
      {/* <FetchData/> */}
      {/* <Timer/> */}
      <User_one data={{name:'RItik'}}/>
    </div>
  )
}

export default App