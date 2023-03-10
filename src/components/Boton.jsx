import React from 'react';
import '../stylesheets/Boton.css'

const Boton = (props) => {

    const esOperador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=');
    };

    return(
        <div
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}
            onClick={() => props.handleClick(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton;

