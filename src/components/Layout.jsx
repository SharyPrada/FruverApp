//Packages
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Outlet, Link, useLocation } from 'react-router-dom'
import Modal from 'react-modal'
import { ToastContainer} from 'react-toastify'

//components
import ModalProduct from './ModalProduct'
import Footer from './Footer'

//Hooks
import useFruver from '../hooks/useFruver'

//styles
import 'react-toastify/dist/ReactToastify.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');


const Layout = () => {

  const location = useLocation()
  const urlActual = location.pathname 

  const {modal} = useFruver()


  return (
    <> 

        <Navbar bg={`${urlActual === '/' ? 'light' : 'light'}`} variant="light" className='sticky-top'>
          <Container>
          <Navbar.Brand as={Link} to="/">Fruver<span className='text-success'>App</span></Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/frutas">Frutas</Nav.Link>
            <Nav.Link as={Link} to="/verduras">Verduras</Nav.Link>
            <Nav.Link as={Link} to="/hortalizas">Hortalizas</Nav.Link>
            <Nav.Link as={Link} to="/api">Api</Nav.Link>
            <Nav.Link as={Link} to="/shopcar">
              <i className="bi bi-cart-fill"></i>
            </Nav.Link>
            
          </Nav>
          </Container>
        </Navbar>

        <section>
          <Outlet></Outlet>
        </section>

        {modal && (
          <Modal
            isOpen={modal}
            style={customStyles}
          >
            <ModalProduct/>
          </Modal>
        )}

        <ToastContainer/>
        <div className='mt-5 '>

        <Footer/>
        </div>

        </>

      
  )
}

export default Layout