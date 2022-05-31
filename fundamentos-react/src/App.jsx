import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default () => {
    return (
        <div id='app'>
            <h1>Fundamentos React (Arrow_)</h1>
            <Fragmento/>
            
            <ComParametro 
                titulo='Situaçao do aluno:' 
                aluno='Carlos'
                nota={1.9}/>

            <Primeiro/>           
        </div>
    )
}