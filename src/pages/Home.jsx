//Componets 
import { Element } from 'react-scroll';
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';
//Styles
import '../styles/Home.css'
//Componets
import HeroSection from "../components/HeroSection"


const Home = () => {


  return (
    <>
      <HeroSection/>  

      <Element name="scroll">

        <section  className="container">

          <div className="iconos">

            <div className="icono">
              <img src="/src/img/salud-mental.png" alt="Imagen icono"/>
              <h3 className="text-success">Comer frutas mejora la salud mental</h3>
              <p>Comer 7-8 porciones al día (más del mínimo recomendado de 5 porciones) está relacionado con un menor riesgo de depresión y ansiedad</p>

            </div>

            <div className="icono">
              <img src="/src/img/obesidad.png" alt="Imagen icono"/>
              <h3 className="text-success">Disminuye el riesgo de obesidad</h3>
              <p>En varios estudios se ha observado una disminución del riesgo de adiposidad y obesidad en ciertos grupos que consumen frutas y verduras </p>

            </div>

            <div className="icono">
              <img src="/src/img/salud.png" alt="Imagen icono"/>
              <h3 className="text-success">Mejora la salud cardiovascular</h3>
              <p>La fibra y los antioxidantes de las frutas y verduras pueden ayudar a prevenir las enfermedades cardiovasculares</p>

            </div>

          </div>        

        </section>
      </Element>

      <section className="bg-success mb-4">
        <div className="container contenedor">
          <div className="texto ">
            <h2>algunas de nuestras frutas en otras presentaciones</h2>
            <p>El coctel de frutas es una receta que viene de mucho tiempo atrás, y que es preferida por muchas personas, gracias a su naturalidad, y, sobre todo, a la cantidad de beneficios y nutrientes que aporta a nuestra salud.</p>
          </div>

          <div className="imagen">

            <Figure>
              <Figure.Image
                width={231}
                height={240}
                alt="171x180"
                src="/src/img/coctel.jpg"
              />

            </Figure>
          </div>
        </div>
        
          
      </section>

      <section className="text-center">
        <h3 className="text-success text-uppercase">algunos de nuestros productos</h3>

        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-18 m-auto"
              src="https://resources.fruvi.co/resources/photos/Sf33URMBKNRLrURMx9JL23J4aVPXtZIOZMnXGDMlx8XlR3MbeG.jpg"
              alt="Imagen coco"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-18 m-auto"
              src="https://resources.fruvi.co/resources/photos/qPtxYNzt44TmnkQKTeFxbEaics9aJB2TkBWJVVEKH7vGegWiu4.jpg"
              alt="Imagen arveja"
            />
          
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-18 m-auto"
              src="https://resources.fruvi.co/resources/photos/muyHvkytC4hbkf6TzMNXMhMn74Dl3ij6Y53OmUZtls9B7wO7H2.jpg"
              alt="Imagen Coliflor"
            />
            
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-18 m-auto"
              src="https://resources.fruvi.co/resources/photos/2rUGN6pK8GLQnZ7KQAM404UPoFUEGrS3jGvuKtZcGWTreS6aaO.jpg"
              alt="Imagen maracuya"
            />
            
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-18 m-auto"
              src="https://resources.fruvi.co/resources/photos/dD8DlpGzZf6nipXZqahkZ6zuWRz6mUa36izfYIHxlhs4vRI3eQ.jpg"
              alt="Imagen papaya"
            />
            
          </Carousel.Item>
        </Carousel>
  
      </section>
        

  

    </>
     
  )
}

export default Home
