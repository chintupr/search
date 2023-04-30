import React from 'react'
import img1 from './images/googlelogo_color_272x92dp.png'
import  './App.css'
import './style.css'
export default function App() {
  
  return (
    
    <div className="container">
      <div>
              <img src={img1} alt="" width="350px" height="100px"/>
       <label>
        <input type="text"  />
       </label>
       <br/><button type="submit">Google Search</button>
       <button type="submit">I'm Feeling lucky</button>
       </div>
       </div>
    
    
    

  )
}