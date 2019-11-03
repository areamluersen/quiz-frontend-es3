import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {

    render() {
        return (
            <div className="options-list">
                <article>
                    <strong>{'Opções Iniciais'}</strong>
                    <p>Selecione uma opção desejada para testes de acesso em links!</p>

                    <Link to={'/login/'}>Login</Link>
                    <Link to={'/jogar/'}>Jogar</Link>
                    <Link to={'/consultarDesempenho/'}>Consultar Desempenho</Link>
                    <Link to={'/consultarDesempenhoAlunos/'}>Consultar Desempenho dos Alunos</Link>
                    <Link to={'/cadastrarPerguntas/'}>Cadastrar Perguntas</Link>
                    <Link to={'/importarUsuarios/'}>Importar Alunos</Link>
                    <Link to={'/products/'}>Acessar</Link>
                </article>
            </div>
        )
    }
}