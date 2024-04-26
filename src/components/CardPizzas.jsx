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
    const price = pizza.price;
    const priceFormated = new Intl.NumberFormat("es-CL").format(price);
  return (
    <Card className='cards-style'>
      <Card.Body>
        <Card.Img className='imagen' src={pizza.img} />
        <Card.Title className='my-3 lista'>Nombre: {pizza.name} </Card.Title>
        <Card.Text className='lista'>Ingredientes:</Card.Text>
        <div className="linea"></div>
        <ul>
        {
            pizza.ingredients.map( (ingred, id) => ( <li className='lista' key={id}>🍕   {ingred}</li> ))
            }

        </ul>
        <Card.Text className='card-price'>${priceFormated}</Card.Text>
        <Button onClick={handleClick}>Ver más</Button>
        <Button onClick={increment} className='mx-3' variant="danger">Añadir</Button>
      </Card.Body>
    </Card>
  )
}

export default CardPizzas