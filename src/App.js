import React from 'react'
import Body from './components/Body'
import Navbar from './components/Navbar'
import data from './data'


export default function App() {
  const cards = data.map(item => {
    return (
      <Body
      img={item.imageUrl}
      location={item.location}
      city ={item.title}
      datestart ={item.startDate}
      dateend= {item.endDate}
      des = {item.description}/>
      
    )
  })
  return (
    <div>
     <Navbar/>
     <section className='cards-list'>
      {cards}
     
     </section>
    </div>
  )
}
