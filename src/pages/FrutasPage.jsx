import Cataloge from "../components/Cataloge"
import useFruver from "../hooks/useFruver"


const FrutasPage = () => {

  

  return (
    <section>
      <div className="container">
        <h1 className="text-success text-center my-3">Frutas</h1>
         <Cataloge refCategory={'frutas'}/>

      </div>
    </section>

  )
}

export default FrutasPage