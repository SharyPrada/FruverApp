import { useEffect } from 'react'
import { createContext, useState } from 'react'
import { toast } from 'react-toastify'

const FruverContext = createContext()

const FruverProvider = ({children}) => { 

  const [ producto, setProducto ] = useState({})
  const [ modal, setModal ] = useState(false)
  const [ pedido, setPedido ] = useState([])
  const [ nombre, setNombre ] = useState('')
  const [ total, setTotal ] = useState(0)

  useEffect(() =>{
    const nuevoTotal = pedido.reduce((total, producto) => (producto.price * producto.cantidad) + total, 0)
    setTotal(nuevoTotal)
  },[pedido])

  const handleSetProducto = producto => {
    setProducto(producto)
  }

  const handleChangeModal = () => {
    setModal(!modal)
  }

  const handleAgregarPedido = ({ ...producto}) => {

    if(pedido.some(productoState => productoState.id === producto.id)){
      
      const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)

      setPedido(pedidoActualizado)

      toast.success('Guardado Correctamente', {position: "bottom-right"})

    }else{
     
      setPedido([...pedido, producto])
      toast.success('Agregando al Carrito', {position: "bottom-right"})
    }

    setModal(false)
  }
  
  const handleEditarCantidades = id => {
    const productoActualizar = pedido.filter( producto => producto.id === id)
    setProducto(productoActualizar[0])

    setModal(!modal)
  }

  const handleEliminarProducto = id => {
    const pedidoActualizado = pedido.filter( producto => producto.id !== id)
    setPedido(pedidoActualizado)
  }

  const colocarOrden = async (e) => {
    e.preventDefault()
    console.log('enviando orden...')
  }

  return(
    <FruverContext.Provider
      value={{
        producto,
        handleSetProducto,
        modal,
        handleChangeModal,
        handleAgregarPedido,
        pedido,
        handleEditarCantidades,
        handleEliminarProducto,
        nombre,
        setNombre,
        colocarOrden,
        total
        
      }}
    >
      {children}
    </FruverContext.Provider>
  )
}

export {
  FruverProvider
}

export default FruverContext