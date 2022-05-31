import React from 'react'
import { Match } from '@testing-library/react'

export default (props) => {
    const valMin = props.valMin
    const valMax = props.valMax
    const numAleatorio = Math.floor(Math.random() * (valMax - valMin + 1)) +  valMin

    return (
        <>
            <h2>Desafio Aleatorio</h2>
            <p>Recebi dois numeros: {valMin}(Minimo) e {valMax}(Maximo)</p>
            <p>O numero aleatorio gerado entre esses dois foi: {numAleatorio}</p>
        </>
    )
}