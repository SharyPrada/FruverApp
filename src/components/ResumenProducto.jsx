import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import useFruver from '../hooks/useFruver';


const ResumenProducto = ({producto}) => {

  const { handleEditarCantidades, handleEliminarProducto } = useFruver()

  return (
    
      <div className='row shadow p-5 mb-4'>
        <div className='col-5'>
          <Figure>
                  <Figure.Image
                    width={300}
                    height={400}
                    alt={`imagen producto ${producto.titlename}`}
                    src={`${producto.imageURL}`}
                    />
          </Figure>
        </div>

        <div className='col-5'>
          <p className='fs-3 font-bold '>
            {producto.titlename}
          </p>
          <p className='fs-4 font-bold mt-2 '>Cantidad: <span className='text-success'>{producto.cantidad}</span></p>
          <p className='fs-4 font-bold mt-2'>Precio: <span className='text-success'>${producto.price}</span></p>
          <p className='fs-4 font-bold mt-2'>Subtotal: <span className='text-success'>${producto.price * producto.cantidad}</span></p>
        </div>

        <div className='col-2 '>
          <Button 
            variant="primary" 
            className=' my-4 px-3 py-2 d-flex font-bold  justify-content-center'
            onClick={() => handleEditarCantidades(producto.id)}
          >Editar</Button>

          <Button 
            variant="danger" 
            className='my-4  px-4 py-2 d-flex font-bold  justify-content-center'
            onClick={() => handleEliminarProducto(producto.id) }
          >Eliminar</Button>

        </div>
      </div>

    
  )
}

export default ResumenProducto