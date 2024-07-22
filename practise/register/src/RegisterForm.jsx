import React from 'react'
import { useState } from 'react'

const RegisterForm = () => {
  const [form,setForm]=useState({})
  return (
    <div className='min-h-screen flex items-center justify-center  bg-blue-100'>
        
        <div className='bg-white p-8 rounded shadow-md w-96'>
          
                <h1 className='text-2xl font-bold mb-6'>Contact Us</h1>
                <form>
                    <div className='flex space-x-16'>
                        <h2 className='text-lg'>First Name*</h2>
                        <h2 className='text-lg'>Last Name*</h2>
                    </div>
                    <div className='flex space-x-2'>
                        <input type="text" className='w-[40%] border border-gray-300' />
                        <input type="text" className='w-[40%] border border-gray-300'/>
                    </div>
                    <div>
                        <h2 className='opacity-50'>Email Address*</h2>
                        <input type="text" className=' w-full border border-gray-300'/>
                    </div>
                    <h2 className='opacity-50'>query Type*</h2>
                     <div className='flex items-center space-x-2'>
              <div className='flex items-center'>
                <input type='radio' id='general' name='queryType' value='General Enquiry' className='w-2 h-2 mr-1 border border-gray-400 rounded-full' />
                <label htmlFor='general'>General Enquiry</label>
              </div>
              <div className='flex items-center'>
                <input type='radio' id='support' name='queryType' value='Support Request' className='w-2 h-2 mr-1 border border-gray-400 rounded-full' />
                <label htmlFor='support'>Support Request</label>
              </div>
            </div>

            <div className=''>
                <h2 className='opacity-50'>Message*</h2>
                <input type="text" className='w-full h-[10] border border-gray-500'/>

            </div>
                </form>
        <form action="">

        </form>
        </div>
    </div>
  
  )
}

export default RegisterForm