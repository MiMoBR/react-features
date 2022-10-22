import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
  } from "react-router-dom"
  
import IndexApp from "../src/routes/index"
import UseRef from "../src/routes/useRef"
import UseMemo from "../src/routes/useMemo"
import UseEffectTwice from '../src/routes/useEffectTwice'
import Page404 from "../src/routes/404"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexApp />} />
        <Route path="/useref" element={<UseRef />} />
        <Route path="/usemeno" element={<UseMemo />} />   
        <Route path="/useeffecttwice" element={<UseEffectTwice />} />         

        
        <Route path="*" element={<Page404 />} /> 
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
)
