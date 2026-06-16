import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router"
import './index.css'

import MainPage from './components/home/MainPage.jsx'
import NavigationPanel from './components/NavigationPanel.jsx'
import Signin from './components/Signin.jsx'
import Login from './components/Login.jsx'
import Logout from './components/Logout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/NavigationPanel" element={<NavigationPanel />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
