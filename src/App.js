import React from 'react'
import img1 from './images/g.jpg'
import  './App.css'
export default function App() {
  return (
    
    <div className="container">
      <div>
              <img src={img1} alt="" width="600px" height="200px"/>
       <label>
        <input type="text"  />
        <button type="submit">Search</button>
       </label>
       <br/><button type="submit">Google Search</button>
       <button type="submit">I'M Feeling lucky</button>
       </div>
    </div>
    
    

  )
}