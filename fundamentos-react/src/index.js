import ReactDOM from'react-dom' // manipular o DOM
import React from 'react' // para usar JSX
import './index.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDOM.render(
    <div>
        <Primeiro/>
        <ComParametro titulo='Titulo do Parametro' subTitulo='SubTitulo do parametro'/>
    </div>, 
    document.getElementById('root')
)