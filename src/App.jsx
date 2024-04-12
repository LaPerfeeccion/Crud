import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Form, BrowserRouter } from "react-router-dom";
import blog from './pages/blog';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" Component={blog} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
