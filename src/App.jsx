import React, { useState } from 'react'
import eye from './assets/eye.png';
import './App.css'

function App() {
  const name = "Pavan Kishore.M";
  const regno = 212221230076;
  const [isVisibile, setVisibile] = useState(false)
  const update = () => {
    if(isVisibile)
    {
      setVisibile(false);
      document.querySelector('.show-details').innerHTML = 'Show Details';
    }
    else
    {
      setVisibile(true);
      document.querySelector('.show-details').innerHTML = 'Hide Details';
    }
  }
  return (
    <React.Fragment>
      <div className='main-div'>
        <img src={eye} alt="eye" width={80} height={80}/>
        <h2>Name: {name}</h2>
        <p>Registration No: {regno}</p>
        <button onClick={() => update()} className='show-details'>Show Details</button>
        {isVisibile ? <p>Department : AI&DS Year : IV(Final)</p>: <p></p>}
      </div>
    </React.Fragment>
  )
}

export default App