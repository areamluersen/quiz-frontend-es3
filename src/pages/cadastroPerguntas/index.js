import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default class CadastroPerguntas extends Component {

    render() {
        return (
            <div
                className="product"
            >
                <h1
                    style={{
                        fontSize: 36,
                        fontWeight: 600,
                        paddingBottom: 30,
                        color: '#2A2A2A',
                    }}
                >
                    Perguntas
                </h1>
                <div
                    style={{
                        paddingBottom: 20,
                    }}
                >
                    <p
                        style={{
                            fontSize: 16,
                            color: '#606060',
                            paddingBottom: 12,
                        }}
                    >
                        Qual é a pergunta?
                    </p>
                    <input
                        className="input"
                        type="text" name="pergunta"
                    />
                </div>
                <div
                    style={{
                        paddingBottom: 20,
                    }}
                >
                    <p
                        style={{
                            fontSize: 16,
                            color: '#606060',
                            paddingBottom: 12,
                        }}
                    >
                        Alternativa 1
                    </p>
                    <input
                        className="input"
                        type="text" name="alternativa1"
                    />
                </div>
                <div
                    style={{
                        paddingBottom: 20,
                    }}
                >
                    <p
                        style={{
                            fontSize: 16,
                            color: '#606060',
                            paddingBottom: 12,
                        }}
                    >
                        Alternativa 2
                    </p>
                    <input
                        className="input"
                        type="text" name="alternativa2"
                    />
                </div>
                <div
                    style={{
                        paddingBottom: 20,
                    }}
                >
                    <p
                        style={{
                            fontSize: 16,
                            color: '#606060',
                            paddingBottom: 12,
                        }}
                    >
                        Alternativa 3
                    </p>
                    <input
                        className="input"
                        type="text" name="alternativa3"
                    />
                </div>
                <div
                    style={{
                        paddingBottom: 20,
                    }}
                >
                    <p
                        style={{
                            fontSize: 16,
                            color: '#606060',
                            paddingBottom: 12,
                        }}
                    >
                        Alternativa 4
                    </p>
                    <input
                        className="input"
                        type="text" name="alternativa4"
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 10,
                    }}
                >
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
                        >Cadastrar</Link>
                    </button>
                </div>
            </div>
        )
    }
}
