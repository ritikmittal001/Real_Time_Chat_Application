import React from 'react'

const Result = (props) => {
  return (
    <div className='shadow-xl mt-5 p-2'>
      <h2 className='text-4xl text-center'>City Name</h2>
      <div className='flex justify-around'>
      <div>Max Temp: 40 deg</div>
      <div>Min Temp:40 deg</div>
      </div>
      <div className='flex justify-around'>
      <div>Icon</div>
      <div>Weather Type</div>
      </div>
    

    </div>
  )
}

export default Result