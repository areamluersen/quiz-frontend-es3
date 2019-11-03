import React,  { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import '../styles.css';

export default class Procuct extends Component {

    render() {

        return (
            <div className='product-info'>
                <h1>Tela de login</h1>
                <p>Sempre Carregar se Não estiver autenticado -> Implementar</p>
                <a href={'https://reacttraining.com/react-router/web/example/auth-workflow'} target="_blank" rel="noopener noreferrer">{'Exemplo de Controle link'}</a>
                <Link to={"/inicio"} >Voltar ao início</Link>
            </div>
        )
    }
}