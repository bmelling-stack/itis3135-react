import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './default.css'
import App from './App.jsx'
import Introduction from './Introduction.jsx'
import Index from './Index.jsx'
import Contract from './Contract.jsx'
import Layout from './Layout.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Route path='/' element={<App/>}></Route>
  </StrictMode>,
)
