import React,  { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default class DesempenhoTurma extends Component {

    render() {
        const data = [{
            name: 'Daniel dos Passos',
            question: 20,
            response: 8,
        }, {
            name: 'Aream Luersen',
            question: 10,
            response: 6,
        }];

        return (
            <div
                className="product"
            >
                <h1
                    style={{
                        fontSize: 36,
                        fontWeight: 600,
                        paddingBottom: 50,
                        color: '#2A2A2A',
                    }}
                >
                    Desempenho
                </h1>
                <div
                    style={{
                        fontSize: 16,
                        color: '#606060',
                        paddingBottom: 4,
                        paddingLeft: 4,
                        borderBottom: '1px solid #DDDDDD',
                    }}
                >
                    Alunos
                </div>
                {data.map((d, i) => (
                    <div
                        style={{
                            fontSize: 16,
                            color: '#606060',
                            padding: '20px 0',
                            margin: '0 20px',
                            borderBottom: '1px solid #DDDDDD',
                        }}
                    >
                        <p
                            style={{
                                fontSize: 16,
                                color: '#606060',
                                paddingBottom: 12,
                                paddingLeft: 4,
                            }}
                        >
                            {data[i].name}
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div
                                style={{
                                    display: 'block',
                                    flex: '35%',
                                    textAlign: 'center',
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: 10,
                                        color: '#A8A8A8',
                                        marginBottom: 6,
                                    }}
                                >
                                    Perguntas
                                </div>
                                <div
                                    style={{
                                        fontSize: 15,
                                        fontWeight: 500,
                                        color: '#2A2A2A',
                                    }}
                                >
                                    {data[i].question}
                                </div>
                            </div>
                            <div
                                style={{
                                    display: 'block',
                                    flex: '35%',
                                    textAlign: 'center',
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: 10,
                                        color: '#A8A8A8',
                                        marginBottom: 6,
                                    }}
                                >
                                    Acertos
                                </div>
                                <div
                                    style={{
                                        fontSize: 15,
                                        fontWeight: 500,
                                        color: '#2A2A2A',
                                    }}
                                >
                                    {data[i].response}
                                </div>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flex: '30%',
                                    alignSelf: 'center',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: 22,
                                        fontWeight: 500,
                                        color: '#150C9D',
                                    }}
                                >
                                    {data[i].response * 100 / data[i].question}%
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <button type="submit"
                        style={{
                            width: '100%',
                            borderRadius: 4,
                            backgroundColor: '#A8A8A8',
                            border: 0,
                            cursor: 'pointer',
                            marginTop: 30,
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
                    >Voltar</Link>
                </button>
            </div>
        )
    }
}
