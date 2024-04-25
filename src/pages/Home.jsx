import  { useContext } from 'react';
import { counterContext } from '../context/Context';
import {Button} from 'react-bootstrap';

function Home() {

const context = useContext(counterContext);
console.log(context);
const {increment, reset} = context
const sumar = () => increment();
const borrar = () => reset()

  return (
    <div className='mt-5'>
      <h1>El home esta aqui</h1>
      <Button onClick={sumar}>Sumar</Button>
      <Button onClick={borrar}>Borrar</Button>
      <p>{context.counter}</p>
    </div>
  )
}

export {Home}