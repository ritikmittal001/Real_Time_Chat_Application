import React from 'react'
import { useRef } from 'react'

const Search = (props) => {
  const searchInput=useRef();
  return (
    <div className='flex'>
      <input type="search" value={props.SearchData} className='border border-black w-full p-3 text-2xl
      ' onChange={()=>props.eventHandler(searchInput.current.value)}  />
      <button onClick={props.} className='p-3 bg-slate-800 text-white'>Search</button>
    </div>
  )
}

export default Search