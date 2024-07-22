import React, { useEffect, useRef, useState } from 'react';
import todo_icon from "../assets/todo_icon.png";
import TodoItems from './TodoItems';

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const inputRef = useRef();
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggle =(id)=>{
    setTodoList((prevTodos)=>{
      return prevTodos.map((todo)=>{
        if(todo.id===id){
          return {...todo,isComplete: !todo.isComplete}

        }
        return todo;
      })
    })
  }

  useEffect(()=>{
    console.log(todoList)
  },[todoList])

  return (
    <div className='bg-slate-900 h-screen w-full flex justify-center items-center'>
      <div className='bg-white h-[550px] w-full max-w-md flex flex-col items-start rounded-lg'>
        {/* ****Title******** */}
        <div className='flex items-center gap-2 mt-12 items-start ml-10'>
          <img className='w-8' src={todo_icon} alt="" />
          <h1 className='text-3xl font-semibold'>To-Do List</h1>
        </div>

        {/* ----------input box----------- */}
        <div className='flex items-center m-7 bg-gray-200 rounded-full '>
          <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your Task' />
          <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD +</button>
        </div>

        {/* TODO LIST */}
        <div>
          {todoList.map((item, index) => {
            return (
              <TodoItems
                key={index}
                text={item.text}
                id={item.id}
                isComplete={item.isComplete}
                deleteTodo={deleteTodo}
                toggle={toggle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
