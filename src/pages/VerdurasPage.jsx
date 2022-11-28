import React from 'react'
import Cataloge from '../components/Cataloge'

const VerdurasPages = () => {
  return (
    <section>
      <div className="container">
        <h1 className="text-success text-center my-3">Verduras</h1>
        <Cataloge refCategory={'verduras'}/> 
      </div>
    </section>
  )
}

export default VerdurasPages