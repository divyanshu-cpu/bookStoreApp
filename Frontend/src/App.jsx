import React from 'react'
import Home from './components/Home/Home'
import { Route, Routes } from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './components/Signup'

const App = () => {
  return (
    <>
     <div className='dark:bg-slate-900 dark:text-white'>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/course' element={<Courses/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
     </Routes>
     </div>
    </>
  )
}

export default App
