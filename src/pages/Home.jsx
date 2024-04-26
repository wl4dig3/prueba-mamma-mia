import  { useContext } from 'react';
import { counterContext } from '../context/Context';
import CardPizzas from '../components/CardPizzas';


function Home({onPress}) {

const context = useContext(counterContext);
const {pizzas} = context;


  return (
    <>
      <h1>El home esta aqui</h1>
      
      
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap'}}>
      {
        pizzas.map( (pizza)=> <CardPizzas key={pizza.id} pizza={pizza} onPress={onPress} />)
      }
    </div>
    </>
  )
}

export {Home}