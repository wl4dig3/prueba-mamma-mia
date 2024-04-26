import  { useContext } from 'react';
import { counterContext } from '../context/Context';
import CardPizzas from '../components/CardPizzas';


function Home({onPress}) {

const context = useContext(counterContext);
const {pizzas} = context;


  return (

    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', marginTop: '3rem'}}>
      {
        pizzas.map( (pizza)=> <CardPizzas key={pizza.id} pizza={pizza} />)
      }
    </div>
  )
}

export {Home}