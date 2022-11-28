import {Card, Col} from 'react-bootstrap';
import '../App.css'

const CardsApi = ({ item }) => {
  
    const { name, photo } = item;
  
    return (
      <Col >
        <Card className="text-center my-3" style={{ width: '18rem' }} border="success">
          <Card.Img variant="top" src={photo} />
          <Card.Body >
            <Card.Title className='text-center fs-5 fw-bold '>{name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default CardsApi