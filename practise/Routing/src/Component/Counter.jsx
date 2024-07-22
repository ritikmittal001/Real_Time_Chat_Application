import React, { useEffect, useState } from 'react'

const Counter = () => {
    const[counter,setCounter]=useState(0);
    function handleChange(){
        setCounter(counter+1);
    };

    function handleChangeDec(){
        setCounter(counter-1);
    }
    useEffect(()=>{
        alert("Counter Value Has been changed")
    },[counter])
  return (
    <div className='flex flex-col items-center mt-20 bg-indigo-800 min-h-screen w-full'>
        <h1 className={`flex justify-center items-center text-3xl ${counter>=1?`text-green-500`:`text-red-600`}`}>Count:{counter}</h1>
        <button className='mt-10 border bg-black bg-indigo-800 text-white w-28' onClick={handleChange}>Increase</button>
        <button className='mt-10 border bg-black bg-indigo-800 text-white w-28' onClick={handleChangeDec}>Decrease</button>

    </div>
  )
}

export default Counter