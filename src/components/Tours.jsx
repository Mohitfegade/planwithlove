import Card from './Card.jsx'
import './Tours.css'

const Tours = ({tours, removetour}) => {
  return (
    <div className='maindiv'>
      <h2>PLAN WITH LOVE</h2>

     <div className='subdiv'>
         {tours.map((tour) => {
            return <Card {...tour} removetour={removetour}></Card>
         })}
     </div>

    </div>
  )
}

export default Tours
