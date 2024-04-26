import {useState, useEffect} from 'react';
import { counterContext } from './Context';
import axios from 'axios';

function StateCompo({children}) {
    const [counter, setCounter] = useState(0);
    const [pizzas, setPizzas] =useState([]);
    const increment = () => {
        setCounter(prev => prev + 1)
    };
    const decrement = () => {
        setCounter( prev => prev -1)
    };
    const reset = () => setCounter(0);
    // llamada a la API
    const PIZZA_URL = '../../public/pizzas.json';
    const getPizzas = () => {
        return axios.get(PIZZA_URL)
        .then( (resp)=> {setPizzas(resp.data)})
    };
    useEffect( ()=> {
        getPizzas()
    },[]);
  return (
    <counterContext.Provider value={{
        counter,
        increment,
        decrement,
        reset,
        getPizzas,
        pizzas,
        setPizzas,
        PIZZA_URL,
    }}>
        {children}
    </counterContext.Provider>
  )
}

export default StateCompo