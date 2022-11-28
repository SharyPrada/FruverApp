//Packages
import { Carousel, } from 'react-bootstrap'


const Carrusel = () => {
  return (
    <div>

        <Carousel variant="dark">

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="/src/img/frutas.jpg"
              alt="First slide"
            />

            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="/src/img/frutas.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="/src/img/frutas.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        
          </Carousel.Item>
        </Carousel>

      </div>
  )
}

export default Carrusel