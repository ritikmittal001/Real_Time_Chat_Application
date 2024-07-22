import React,{useState} from 'react'

const Calculator = () => {

    const[display,setDisplay]=useState('');
    const[result,setResult]=useState(null);
    const handleClear=()=>{
        setDisplay('');
        setResult(null);
    };
    const handleResult=()=>{
        try{
            const res=eval(display);
           setResult(res);
        }catch(error){
            setDisplay(error);
        }
    }

    const handleClick=(value)=>{
        setDisplay((prevDisplay) => prevDisplay + value);
    }

  return (
    <div className='flex justify-center items-center min-h-screen bg-slate-500'>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
            <div className='mb-4'>
                <div className='bg-black text-white p-4 text-right text-2xl rounded'>
                    
                {result!==null ? result : display || "0"}
                </div>
            </div>
            <div className='grid grid-cols-4 gap-2'>
                <button className='p-4 bg-gray-200 rounded' onClick={()=>handleClick("1")}>1</button>
                <button className='p-4 bg-gray-200 rounded' onClick={()=>handleClick("2")}>2</button>
                <button className='p-4 bg-gray-200 rounded' onClick={()=>handleClick("3")}>3</button>
                <button className='p-4 bg-gray-200 rounded' onClick={()=>handleClick("+")}>+</button>
                <button className='p-4 bg-gray-200 rounded' onClick={()=>handleClick("4")}>4</button>
                <button className='p-4 bg-gray-200 rounded' onClick={()=>handleClick("5")}>5</button>
                <button className='p-4 bg-gray-200 rounded' onClick={()=>handleClick("6")}>6</button>
                <button className='p-4 bg-gray-200 rounded' onClick={()=>handleClick("-")}>-</button>
                <button className='p-4 bg-gray-200 rounded' onClick={()=>handleClick("7")}>7</button>
                <button className='p-4 bg-gray-200 rounded' onClick={()=>handleClick("8")}>8</button>
                <button className='p-4 bg-gray-200 rounded' onClick={()=>handleClick("9")}>9</button>
                <button className='p-4 bg-gray-200 rounded'onClick={()=>handleClick("*")} >*</button>
                <button className='p-4 bg-gray-200 rounded' onClick={()=>handleClick("0")}>0</button>
                <button className='p-4 bg-gray-200 rounded' onClick={()=>handleClick(".")}>.</button>
                <button className='p-4 bg-gray-200 rounded' onClick={handleClear}>C</button>
                <button className='p-4 bg-gray-200 rounded' onClick={()=>handleClick("/")}>/</button>
                <button className='p-4 bg-gray-200 rounded' onClick={handleResult}>=</button>

            </div>


        </div>

    </div>
  )
}

export default Calculator