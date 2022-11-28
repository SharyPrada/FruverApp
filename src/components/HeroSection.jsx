//Packages
import { scroller } from 'react-scroll';
import Button from 'react-bootstrap/Button';

//styles
import '../styles/HeroSection.css'

const HeroSection = () => {

  const scrollType ={
    duration: 500,
    smooth: true,
    offset: -56
  }

  return (
    <div className="hero">
      <div className="container">        

        <h1 className='text-outline-success'>FruverApp</h1>
        <p>FruverApp es una plataforma en donde podras encontrar gran veriedad entre frutas, 
          verduras y hortalizas.</p>
        <p>Que estás esperando para hacer tu pedido?</p>  

        <Button variant="outline-success" onClick={() => scroller.scrollTo("scroll", scrollType )}>VER MÁS</Button>{' '}

      </div>
      
    </div>
  )
}

export default HeroSection