import React,  { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import '../styles.css';

export default class DesempenhoTurma extends Component {

    render() {

        return (
            <div className='product-info'>
                <h1>Desempenho da Turma</h1>
                <p>Tela de Desempenho da Turma -> Implementar</p>

                <Link to={"/inicio"} >Voltar ao início</Link>
            </div>
        )
    }
}