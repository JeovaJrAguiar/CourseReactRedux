import React from 'react-dom'

export default function ComParametro(params){
    return (
        <div>
            <h2>{params.titulo}</h2>
            <h3>{params.subTitulo}</h3>
        </div>
    )
}