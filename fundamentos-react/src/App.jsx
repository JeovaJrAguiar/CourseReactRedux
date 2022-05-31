import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default () => (
    <div id='app'>
        <h1>Fundamentos React</h1>

        <Card titulo="# 04 - Desafio Aleatorio">
            <Aleatorio
                valMin={70}
                valMax={539} />
        </Card>

        <Card titulo="# 03 - Componente Fragmento">
            <Fragmento />
        </Card>

        <Card titulo="# 02 - Componente ComParametro">
            <ComParametro
                titulo='Situaçao do aluno:'
                aluno='Carlos'
                nota={1.9} />
        </Card>

        <Card titulo="# 01 - Primeiro Componente">
            <Primeiro />
        </Card>
    </div>
);
