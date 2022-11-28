import {useLocation } from 'react-router-dom'
const Footer = () => {

  const location = useLocation()
  const urlActual = location.pathname 
  return (
  
      <footer className='bg-light '>

        <div className={`${urlActual === '/shopcar' ? 'fixed-bottom container': 'container' } `}>
          <div className='row text-center'>
            <div className='col-sm'>

              <hr/>
              <p>
                &copy;{new Date().getFullYear()} FRUVER<span className='text-success'>APP </span>| Todos los derechos reservados | terminos del servicio | Privado
              </p>

            </div>
          </div>
        </div>

      </footer>
    
  )
}

export default Footer