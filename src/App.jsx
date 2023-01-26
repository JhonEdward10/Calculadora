import LogoAcademlo from './imagenes/logoacademlo.png';
import Boton from './components/Boton';
import './App.css';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = value =>{
    setInput(input + value)
  };

  const calcuteResult = () =>{
    if(input){
      setInput(evaluate(input))
    } else{
      alert("Por Favor ingrese los valores para realizar calculos");
    }
  };

  return (
    <div className="App">
      <div className='academlo-logo-contenedor'>
        <img 
        className='academlo-logo'
        src={LogoAcademlo} 
        alt="logo-de-academlo" 
        />
      </div>
      <div className='contenedor-calculadora'>
          <Pantalla 
          input={input}
          />
        <div className='fila'>
          <Boton handleClick={addInput}>7</Boton>
          <Boton handleClick={addInput}>8</Boton>
          <Boton handleClick={addInput}>9</Boton>
          <Boton handleClick={addInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton handleClick={addInput}>4</Boton>
          <Boton handleClick={addInput}>5</Boton>
          <Boton handleClick={addInput}>6</Boton>
          <Boton handleClick={addInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton handleClick={addInput}>1</Boton>
          <Boton handleClick={addInput}>2</Boton>
          <Boton handleClick={addInput}>3</Boton>
          <Boton handleClick={addInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton handleClick={calcuteResult}>=</Boton>
          <Boton handleClick={addInput}>0</Boton>
          <Boton handleClick={addInput}>.</Boton>
          <Boton handleClick={addInput}>+</Boton>
        </div>
        <div className='fila'>
          <BotonClear handleClick={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  )
}

export default App
