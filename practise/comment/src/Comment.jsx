import React from 'react'
import { AiOutlineLike } from "react-icons/ai";

const Comment = () => {
  return (
    <div className='min-h-screen bg-gray-800 flex justify-center items-center'>
      <div className='bg-white w-[650px] flex flex-col items-center justify-center h-[550px] pt-10'>
        <div className='w-96 flex flex-col'>
          <input type="text" className='p-3 border border-gray-500 h-36 w-96 opacity-70 rounded-md' placeholder='Write a comment here..' />
          <button className='bg-green-800 text-white h-10 w-20 rounded-lg mt-3'>Submit</button>
        </div>
        <div className='flex items-center justify-start mt-5'>
          <AiOutlineLike className='h-10' />
          <p className='ml-2'>0</p>
        </div>
      </div>
    </div>
  )
}

export default Comment;
