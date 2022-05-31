import ReactDOM from'react-dom' // manipular o DOM
import React from 'react' // para usar JSX
import './index.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

ReactDOM.render(
    <div>
        <Primeiro/>
        <ComParametro 
            titulo='Situaçao do aluno:' 
            aluno='Carlos'
            nota={1.9}/>

        <ComParametro 
            titulo='Situaçao do aluno:' 
            aluno='Maria'
            nota={9.9}/>

        <Fragmento/>
    </div>, 
    document.getElementById('root')
)