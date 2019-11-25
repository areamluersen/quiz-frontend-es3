import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';
import Login from './pages/login';
import Inicio from './pages/inicio';
import Jogar from './pages/jogo';
import DesempenhoAluno from './pages/desempenhoAluno';
import DesempenhoTurma from './pages/desempenhoTurma';
import CadastroPerguntas from './pages/cadastroPerguntas';
import ImportarUsuarios from './pages/importarUsuarios';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route redirect exact path="/" component={Login} />
            <Route path="/inicio" component={Inicio} />
            <Route path="/jogar" component={Jogar} />
            <Route path="/consultarDesempenho" component={DesempenhoAluno} />
            <Route path="/consultarDesempenhoAlunos" component={DesempenhoTurma} />
            <Route path="/cadastrarPerguntas" component={CadastroPerguntas} />
            <Route path="/importarUsuarios" component={ImportarUsuarios} />
            <Route path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
