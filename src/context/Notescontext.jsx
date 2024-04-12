import React, { createContext } from 'react'
import { useState } from 'react'

export const Notescontext = createContext()

export const NotescontextProvider = ({children}) => {
    const [global, setGlobal] = useState([])
    

    return (
    <Notescontext.Provider value={{global, setGlobal}} >
      {children}
    </Notescontext.Provider>
  )
}



