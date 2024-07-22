import React from 'react'
import Navbar from './components/Navbar'
import {useSelector,useDispatch} from 'react-redux'

const App = () => {
  const count=useSelector((state)=>state.counter.value)
  return (
    
    <div>
<Navbar/>
{count}
    </div>
  )
}

export default App