import { createContext, useState } from "react";

export const Context = createContext({})

export default function ContextProvider({ children }){

    const [closed, setClosed] = useState(true)
    const [responseApp, setResponse] = useState([])
    const [input, setInput] = useState(false)

    return(<Context.Provider value={{
        closed,
        setClosed,
        responseApp,
        setResponse,
        setInput,
        input
    }}>
        {children}
    </Context.Provider>
    )
}