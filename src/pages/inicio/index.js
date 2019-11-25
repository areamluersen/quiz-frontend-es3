import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {

    render() {
        const valor = Math.floor(Math.random() * (2 - 1 + 1) + 1);
        if(valor === 1) {
            return (
                <div
                    className="product"
                >
                    <h1
                        style={{
                            fontSize: 20,
                            paddingBottom: 40,
                            fontWeight: 300,
                            color: '#2A2A2A',
                            textAlign: 'center',
                        }}
                    >
                        Bem Vindo, Daniel dos Passos
                    </h1>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            paddingBottom: 20,
                        }}
                    >
                        <button type="submit"
                                style={{
                                    width: 210,
                                    borderRadius: 4,
                                    backgroundColor: '#150C9D',
                                    border: 0,
                                    cursor: 'pointer',
                                }}
                        >
                            <Link to={"/jogar"}
                                  style={{
                                      display: 'flex',
                                      justifyContent: 'center',
                                      color: '#FFFFFF',
                                      textDecoration: 'none',
                                      fontSize: 16,
                                      padding: 16,
                                  }}
                            >Jogar</Link>
                        </button>
                    </div>
                    <Link to={"/consultarDesempenho"}
                          style={{
                              display: 'flex',
                              justifyContent: 'center',
                              color: '#150C9D',
                              fontWeight: 400,
                              textDecoration: 'none',
                              fontSize: 14,
                              padding: '0 20px',
                          }}
                    >Consultar Desempenho</Link>
                </div>
                /*<div className="options-list">
                    <article>
                        <strong>{'Opções Iniciais'}</strong>
                        <p>Selecione uma opção desejada para testes de acesso em links!</p>

                        <Link to={'/'}>Login</Link>
                        <Link to={'/jogar/'}>Jogar</Link>
                        <Link to={'/consultarDesempenho/'}>Consultar Desempenho</Link>
                        <Link to={'/consultarDesempenhoAlunos/'}>Consultar Desempenho dos Alunos</Link>
                        <Link to={'/cadastrarPerguntas/'}>Cadastrar Perguntas</Link>
                        <Link to={'/importarUsuarios/'}>Importar Alunos</Link>
                        <Link to={'/products/'}>Acessar</Link>
                    </article>
                </div>
                */
            )
        } else {
            return (
                <div
                    className="product"
                >
                    <h1
                        style={{
                            fontSize: 20,
                            paddingBottom: 40,
                            fontWeight: 300,
                            color: '#2A2A2A',
                            textAlign: 'center',
                        }}
                    >
                        Bem Vindo, Daniela Souza
                    </h1>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            paddingBottom: 20,
                        }}
                    >
                        <button type="submit"
                                style={{
                                    width: 210,
                                    borderRadius: 4,
                                    backgroundColor: '#150C9D',
                                    border: 0,
                                    cursor: 'pointer',
                                }}
                        >
                            <Link to={"/jogar"}
                                  style={{
                                      display: 'flex',
                                      justifyContent: 'center',
                                      color: '#FFFFFF',
                                      textDecoration: 'none',
                                      fontSize: 16,
                                      padding: 16,
                                  }}
                            >Jogar</Link>
                        </button>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            paddingBottom: 20,
                        }}
                    >
                        <Link to={"/consultarDesempenhoAlunos"}
                              style={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  color: '#150C9D',
                                  fontWeight: 400,
                                  textDecoration: 'none',
                                  fontSize: 14,
                              }}
                        >
                            Consultar Desempenho dos Alunos
                        </Link>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            paddingBottom: 20,
                        }}
                    >
                        <Link to={"/cadastrarPerguntas"}
                              style={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  color: '#150C9D',
                                  fontWeight: 400,
                                  textDecoration: 'none',
                                  fontSize: 14,
                              }}
                        >
                            Cadastrar Perguntas
                        </Link>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Link to={"/importarUsuarios"}
                              style={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  color: '#150C9D',
                                  fontWeight: 400,
                                  textDecoration: 'none',
                                  fontSize: 14,
                              }}
                        >
                            Importar Alunos
                        </Link>
                    </div>
                </div>
                /*<div className="options-list">
                    <article>
                        <strong>{'Opções Iniciais'}</strong>
                        <p>Selecione uma opção desejada para testes de acesso em links!</p>

                        <Link to={'/'}>Login</Link>
                        <Link to={'/jogar/'}>Jogar</Link>
                        <Link to={'/consultarDesempenho/'}>Consultar Desempenho</Link>
                        <Link to={'/consultarDesempenhoAlunos/'}>Consultar Desempenho dos Alunos</Link>
                        <Link to={'/cadastrarPerguntas/'}>Cadastrar Perguntas</Link>
                        <Link to={'/importarUsuarios/'}>Importar Alunos</Link>
                        <Link to={'/products/'}>Acessar</Link>
                    </article>
                </div>
                */
            )
        }
    }
}
