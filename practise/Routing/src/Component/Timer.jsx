import React, { useEffect, useState } from 'react'

const Timer = () => {
    const[second,setSecond]=useState(0);
    const[isActive,setIsActive]=useState(true);

    useEffect(()=>{
        let interval=null;

        if(isActive){
            interval=setInterval(()=>{
                setSecond((prevSecond)=> prevSecond+1);
            },1000);
        }else{
            clearInterval(interval);
           
        }
        return ()=>clearInterval(interval);
    },[isActive]);
  return (
    <div className='flex justify-center items-center flex-col  my-20 bg-slate-400 min-h-screen'>
        <h1 className={`font-semibold text-4xl ${second>10?`text-green-400`:`text-red-500`}`}>Timer : {second} seconds</h1>
        <div className='my-10'>
            <button onClick={()=>setIsActive(true)}  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded mr-2 `}>Start</button>
            <button onClick={()=>setIsActive(false)} className='bg-red-500 hover:bg-red-700 text-white font-semibold py-3 px-5 rounded-xl'>Stop</button>
        </div>

    </div>
  )
}

export default Timer