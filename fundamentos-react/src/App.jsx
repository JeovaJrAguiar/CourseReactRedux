import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default () => (
    <div id='app'>
        <h1>Fundamentos React</h1>

        <Card titulo="Desafio Aleatorio">
            <Aleatorio
                valMin={70}
                valMax={539} />
        </Card>

        <Card titulo="Componente Fragmento">
            <Fragmento />
        </Card>

        <Card titulo="Componente ComParametro">
            <ComParametro
                titulo='Situaçao do aluno:'
                aluno='Carlos'
                nota={1.9} />
            <Primeiro />
        </Card>
    </div>
);
