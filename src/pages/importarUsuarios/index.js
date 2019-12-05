import React,  { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default class Procuct extends Component {

    render() {

        return (
            <div className='product'>
                <h1>Importar Alunos</h1>
                <p style={{marginTop: 10}}>Tela de Importação de Usuários -> Implementar</p>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 30}}>

                    <Link to={"/inicio"}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    color: '#A8A8A8',
                                    textDecoration: 'none',
                                    fontSize: 16,
                                    padding: 16,
                                }}
                            >Voltar</Link>
                        <button type="submit"
                            style={{
                                width: '34%',
                                borderRadius: 4,
                                backgroundColor: '#150C9D',
                                border: 0,
                                cursor: 'pointer',
                            }}
                            onClick={() => window.alert('Usuários Importados com Sucesso')}
                        >
                            <Link to={"/inicio"}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    color: '#FFFFFF',
                                    textDecoration: 'none',
                                    fontSize: 16,
                                    padding: 16,
                                }}
                            >Importar</Link>
                        </button>
                </div>
            </div>
        )
    }
}
