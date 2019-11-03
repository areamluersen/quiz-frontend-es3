import React,  { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import '../styles.css';

export default class CadastroPerguntas extends Component {

    render() {

        return (
            <div className='product-info'>
                <h1>Cadastro de Perguntas</h1>
                <p>Tela de Cadastro de Perguntas -> Implementar</p>

                <Link to={"/inicio"} >Voltar ao início</Link>
            </div>
        )
    }
}