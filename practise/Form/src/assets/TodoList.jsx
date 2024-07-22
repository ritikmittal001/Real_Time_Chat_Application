import React,{useRef} from 'react'

const TodoList = () => {
    const inputRef = useRef("");
    console.log(inputRef);
    const inputText=inputRef.current.value.trim();
    console.log(inputText);
  return (
    <div className='bg-slate-900 h-screen flex justify-center items-center'>
        <div className='bg-white h-[550px] w-full max-w-md justify-center items-center rounded-lg'>
            <div className='flex justify-center '>
            <h1 className='text-2xl text-slate-900 items-center '>Todo List</h1>
            </div>
            <div className='flex justify-center mt-10'>
                <input name='input' ref={inputRef} className='bg-slate-700 border w-full rounded-xl text-white ' type="text" placeholder='Add Task here'/>
                <button className='bg-yellow-200 rounded-xl'>Add Task</button>
            </div>
            <div className='mt-5 ml-5'>
                <p>Books</p>
                <p>pen</p>
            </div>
        
        </div>
        
    </div>
  )
}

export default TodoList