import ReactDOM from'react-dom' // manipular o DOM
import React from 'react' // para usar JSX
import './index.css'

import Primeiro from './components/basicos/Primeiro'

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
    </div>, 
    document.getElementById('root')
)