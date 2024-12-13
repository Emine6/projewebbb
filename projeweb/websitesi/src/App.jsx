import { useState } from 'react'
import './App.css'
import Header from './Header'
import { eğitimler } from './Data'
import Eğitim from './Eğitim'
import './css/Eğitim.css';

function App() {

  return (
   <div>
    <Header /> 
    <div className='eğitim-main' >       
      
    {
      eğitimler?.map((eğitim)=>(
        <Eğitim key={eğitim.id} eğitim={eğitim} />

      )

      )
    }
   
   </div>
   </div>
  )
}

export default App


