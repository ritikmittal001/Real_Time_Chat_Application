import React, { useState } from 'react'

const App = () => {
  const [form,setForm]=useState({email:"",phone:""})
 
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
  }
  return (
    <div style={{backgroundColor:"black"}}>
      {/* <button onClick={display}>click me</button> */}
      <input type="text" name="email" value={form.email} onChange={handleChange} />
      <input type="text" name='phone' value={form.phone} onChange={handleChange} />
    </div> 
  )
}

export default App