import { createContext, useState } from "react";

const CounterContext = createContext();

export const counterProvider = ({children})=>{
    const[count,setCount]=useState(0);

    const increment=()=>{
        setCount(prevCount=>prevCount+1);
    };

    return(
        <CounterContext.Provider value={{count,increment}}>
            {children}
        </CounterContext.Provider>
    );
};

export default CounterContext;