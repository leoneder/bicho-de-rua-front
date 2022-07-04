
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card1(props) {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={props.imagemURL} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
    
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Card1;