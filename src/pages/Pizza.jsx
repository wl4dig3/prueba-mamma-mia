import { useContext } from "react";
import { counterContext } from "../context/Context";
import {Card, Button} from "react-bootstrap";
import { useParams } from "react-router-dom";

function Pizza() {
  const context = useContext(counterContext);
  const { pizzas } = context;
  const { id } = useParams();

  //   const getPizzas = () => {
  //     return axios.get(`${PIZZA_URL}/${id}`)
  //     .then( (resp)=> {setPizzas(resp.data)})
  // }
  // useEffect( ()=> {
  //     getPizzas()
  // },[])

  const filterP = pizzas.filter((item) => item.id === id);

  console.log("filtrado", filterP);

  const filterPizza = () => {
    //
  };
  return (
    <div>
      <h2>Tu pizza</h2>

      {filterP.map((pizza) => (
        <Card key={pizza.id} className="cards-style">
          <Card.Body>
            <Card.Img className="imagen" src={pizza.img} />
            <Card.Title className="my-3">Nombre: {pizza.name} </Card.Title>
            <ul>
              {pizza.ingredients.map((ingred, id) => (
                <li key={id}>{ingred}</li>
              ))}
            </ul>

            <Button>Ver más</Button>
            <Button className="mx-3" variant="danger">
              Añadir
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export { Pizza };
