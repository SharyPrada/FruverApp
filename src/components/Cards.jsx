
import {Card, Button} from 'react-bootstrap';
import useFruver from '../hooks/useFruver';

const Cards = ({ item, handleClick }) => {

  const {handleSetProducto, handleChangeModal} = useFruver()
  
  const { titlename, quantity, price, imageURL } = item;
  
  return (
    <div>
      <Card className="text-center my-3 " style={{ width: '18rem' }} border="success">
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title className="fs-4">{titlename}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">-{quantity}-</Card.Subtitle>
          <Card.Text className={`text-center text-success fs-4 fw-bold`}>
            ${price}
          </Card.Text>
          <Button  variant="outline-success" onClick={() => {
            handleChangeModal()
            handleSetProducto(item)
            }}
            >Agregar al Carrito
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards