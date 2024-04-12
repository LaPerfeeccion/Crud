import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NotescontextProvider } from './context/Notescontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotescontextProvider>
      <App />

    </NotescontextProvider>
  </React.StrictMode>,
)
