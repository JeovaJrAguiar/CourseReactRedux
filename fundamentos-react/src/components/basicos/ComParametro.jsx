import React from 'react-dom'

export default function ComParametro(props){
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p><strong>{props.aluno}</strong> tem nota {props.nota}</p>
        </div>
    )
}
