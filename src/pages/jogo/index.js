import React,  { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import '../styles.css';

export default class Procuct extends Component {

    render() {

        return (
            <div className='product-info'>
                <h1>Jogar</h1>
                <p>Tela do Jogo -> Implementar</p>

                <Link to={"/inicio"} >Voltar ao início</Link>
            </div>
        )
    }
}