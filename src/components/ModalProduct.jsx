import { useState, useEffect } from 'react';
import Figure from 'react-bootstrap/Figure';
import useFruver from '../hooks/useFruver';
import Button from 'react-bootstrap/Button';

const ModalProduct = () => {

  const {producto, handleChangeModal, handleAgregarPedido, pedido} =  useFruver()
  const [ cantidad, setCantidad ] = useState(1)
  const [ edicion, setEdicion ] = useState(false)

  useEffect(() => {
    if(pedido.some((pedidoState) => pedidoState.id === producto.id)){

      const productoEdicion = pedido.find((pedidoState) => pedidoState.id === producto.id)

      setEdicion(true)
      setCantidad(productoEdicion.cantidad)
    }
  },[producto, pedido])



  return (
    <div className="d-flex ">
      <div >

        <div className='row'>

          <div className="col mt-5">
            <Figure>
              <Figure.Image
                width={300}
                height={400}
                alt={`imagen producto ${producto.titlename}`}
                src={`${producto.imageURL}`}
                />
            </Figure>

          </div>

          <div className="col-6">

            <div className='d-flex justify-content-end '>
              <Button 
                variant="success"
                onClick={handleChangeModal}
              
              >
              <i className="bi bi-x"></i> 
              </Button>
            </div>

            <h1 className=' font-bold text-success'>{producto.titlename}</h1>
            <p className=' font-black fs-4 fw-bold '>${producto.price} </p>

            <div className='d-flex gap-3'>
              <Button 
                  variant="success"
                  onClick={() => {
                    if(cantidad <= 1 ) return;
                    setCantidad(cantidad - 1)
                  }}
                
                >
                <i className="bi bi-dash-circle-fill"></i>
              </Button>

              <p className='font-black fs-4 fw-bold '>{cantidad}</p>

              <Button 
                  variant="success"
                  onClick={() => {
                    if(cantidad >= 25 ) return;
                    setCantidad(cantidad + 1)
                  }}
                
                >
                <i className="bi bi-plus-circle-fill"></i>
              </Button>
            </div>

            <Button 
                  variant="success"
                  className='px-5 py-2 mt-3 '
                  onClick={() => handleAgregarPedido({...producto, cantidad})}
                
                >
                {edicion ? 'Guardar Cambios': 'Agregar al Carrito'}
              </Button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalProduct