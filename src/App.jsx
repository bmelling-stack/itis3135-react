import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Index from './Index'
import Introduction from './Introduction'
import Contract from './Contract'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Index/>}>
        <Route path='/introduction' element={<Introduction/>}></Route>
        <Route path='/contract' element={<Contract/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
