//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormFrontContainer from './pages/FormFrontContainer'
import ProgressCard from "./pages/ProgressCard";
import './App.css'

function App() {

  return (
    <BrowserRouter>
         {/**  <FormFrontContainer /> **/} 
       <Routes>
          <Route path="/formFrontContainer" element={ <FormFrontContainer />} />
           <Route path="/progressCard" element={<ProgressCard />} />
       </Routes>
    </BrowserRouter>
      
        
    
  )
}

export default App
