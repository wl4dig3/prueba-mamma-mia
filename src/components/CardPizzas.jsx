import  { useContext } from 'react';
import { counterContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';
import {Card, Button} from "react-bootstrap";

function CardPizzas({pizza}) {
    const context = useContext(counterContext);
    const {increment} = context;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/pizza/${pizza.id}`)
    }
  return (
    <Card className='cards-style'>
      <Card.Body>
        <Card.Img className='imagen' src={pizza.img} />
        <Card.Title className='my-3'>Nombre: {pizza.name} </Card.Title>
        <ul>
        {
            pizza.ingredients.map( (ingred, id) => ( <li key={id}>{ingred}</li> ))
            }

        </ul>
        
        <Button onClick={handleClick}>Ver más</Button>
        <Button onClick={increment} className='mx-3' variant="danger">Añadir</Button>
      </Card.Body>
    </Card>
  )
}

export default CardPizzas