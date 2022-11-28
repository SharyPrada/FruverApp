import useFruver from "../hooks/useFruver"
import ResumenProducto from "../components/ResumenProducto"
import Button from 'react-bootstrap/Button';
import { useEffect, useCallback } from "react";
import { toast } from 'react-toastify'

const ShopCarPage = () => {

  const { pedido, nombre, setNombre, colocarOrden, total } = useFruver()

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === '' || nombre.length < 3;
  },[pedido, nombre]);

  useEffect(() => {
    comprobarPedido()
  }, [pedido, comprobarPedido])

  

  return (
    <div className='container'>
      <h1 className='text-success text-center my-3'>Resumen De tus Productos</h1>
      {pedido.length === 0 ? (
        <p className="text-center text-2xl"> No hay elementos en tu pedido</p>
      ) : (
        pedido.map( producto => (
          <ResumenProducto 
            key={producto.id}
            producto={producto}
          />
        ))
        
        
        )}
        <h2 className="text-center text-success">Total y Confirmar Pedido</h2>
        <form onSubmit={colocarOrden}>
          <div>
            <label 
              htmlFor="nombre"
              className="text-uppercase font-bold fs-5">Nombre: </label>
            <input 
              id="nombre"
              type="text"
              className="mx-3"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <p  className="fs-5">Total a Pagar: {""} <span className="font-bold text-success">{total}</span></p>
          </div>

          <div className="my-4 ">
          <Button 
            disabled={comprobarPedido()}
            type="submit" 
            variant="success"
            onClick={() => toast.success('Pedido Confirmado', {position: "bottom-right"})}
          >
            Confirmar Pedido</Button>

          </div>
        </form>
    </div>
  )
}

export default ShopCarPage