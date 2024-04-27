import { useContext } from "react";
import { counterContext } from "../context/Context";
import {Card, Button} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Pizza() {
  const context = useContext(counterContext);
  const { pizzas } = context;
  const { id } = useParams();
  const filterP = pizzas.filter((item) => item.id === id);
  const navigate = useNavigate();
  const handleClick = () => {
      navigate(`/carrito/`)
  }


  return (
    <>
      <h2>Tu pizza</h2>
    <div className="container-card-detail">

      {filterP.map((pizza) => (
        <Card key={pizza.id} className="cards-style">
          <Card.Body className="card-bodi">
            <Card.Img className="imagen" src={pizza.img} />
            <Card.Title className="my-3 lista">Nombre: {pizza.name} </Card.Title>
            <Card.Text className="text-aligment">{pizza.desc}</Card.Text>
            <Card.Text className='lista'>Ingredientes:</Card.Text>
            <div className="linea"></div>
            <ul>
              {pizza.ingredients.map((ingred, id) => (
                <li className="lista" key={id}>🍕 {ingred}</li>
              ))}
            </ul>
            <Button onClick={handleClick} className="mx-3" variant="danger">
              Añadir
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    </>
  );
}

export { Pizza };
