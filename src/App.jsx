import { useState } from 'react'
import './App.css'
import { Year } from './components/Year'


function App() {

  return (
    <div>
      <Year />
    </div>
  )
}

export default App

//what does my shell need in an event planner?
//we need a list of events, right? Maybe useState(Array.fill(7, null)) for a week of events? do we scope this for one week? what about other weeks?
//how do we do all weeks in a year? 52 arrays of 7? I guess so, lol.  so... the core scope needs to be... 52 arrays with 7 empties each. 
//then... it maps over the state... and returns a week with the corresponding 7 empties... OH god. I kind of like it though
