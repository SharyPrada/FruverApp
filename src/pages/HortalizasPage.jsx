import Cataloge from "../components/Cataloge"

const HortalizasPage = () => {
  return (
    <section >
      <div className="container">    
        <h1 className="text-success text-center my-3">Hortalizas</h1>
        <Cataloge refCategory={'hortalizas'}/> 
      </div>

    
  </section>
  )
}

export default HortalizasPage