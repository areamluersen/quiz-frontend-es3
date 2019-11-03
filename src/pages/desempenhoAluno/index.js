import React,  { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import '../styles.css';

export default class DesempenhoAluno extends Component {

    render() {

        return (
            <div className='product-info'>
                <h1>Desempenho do Aluno</h1>
                <p>Tela de Desempenho do Aluno -> Implementar</p>

                <Link to={"/inicio"} >Voltar ao início</Link>
            </div>
        )
    }
}