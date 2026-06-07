import { useState } from 'react'
import data from './data.jsx'
import Tours from './components/Tours.jsx'
import './App.css'

function App() {
  const [tours, setTours] = useState(data)

function removetour(id){
  const newtours = tours.filter((tour) => tour.id !== id)
  setTours(newtours)
}


if (tours.length === 0){
  return (
    <div className='refresh'>
      <h2 className='refresh-title'>No Tours Left</h2>
      <button className='refresh-button' onClick={() => setTours(data)}>Refresh</button>
    </div>
  )
}
  return (
   <div className ='app'> 
      <Tours tours = {tours} removetour={removetour}> </Tours>


   </div>
  )
}

export default App
