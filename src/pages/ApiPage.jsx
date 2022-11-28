import ApiConection from "../components/ApiConection"


const ApiPage = () => {
  return (
    <div className="container">
        <h1 className="text-success text-center my-3">Conexión API de Cócteles</h1>
        <ApiConection />
    </div>
  )
}

export default ApiPage