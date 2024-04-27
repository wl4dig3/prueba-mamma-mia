import { useContext } from "react";
import { counterContext } from "../context/Context";
import { useParams } from "react-router-dom";

function Carrito() {
  const context = useContext(counterContext);
const {...id} = useParams();
  const { pizzas, increment, decremet } = context;
  console.log(id);

  return (
    <>
    <h2>Detalle de tu pedido</h2>
    </>
  )
}

export {Carrito};
