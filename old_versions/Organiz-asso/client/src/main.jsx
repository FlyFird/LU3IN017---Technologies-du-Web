import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router"
import './index.css'

import MainPage from './components/MainPage.jsx'
import Signin from './components/Signin.jsx'
import Login from './components/Login.jsx'
import Profil from './components/Profil.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profil" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
