import React,  { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

export default class DesempenhoAluno extends Component {

    render() {
        const data = {
            question: 10,
            response: 8,
            allQuestion: [
                {
                    question: 'Qual o grupo em que todas as palavras foram escritas corretamente?',
                    response: 'Asterisco, beneficente, meteorologia, entretido',
                    correct: true,
                },
                {
                    question: 'Pergunta',
                    response: 'Errada',
                    responseCorrect: 'Correta'
                }
            ],
            quantityStudent: 60,
            position: 2,
        };

        return (
            <div
                className="product"
                style={{
                    maxWidth: 1000,
                }}
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
                    className="desempenho"
                    style={{
                        justifyContent: 'space-between',
                    }}
                >
                    <div
                        className="espacodireita"
                        style={{
                            flex: '65%',
                        }}
                    >
                        <div
                            style={{
                                fontSize: 16,
                                color: '#606060',
                                paddingBottom: 4,
                                paddingLeft: 4,
                                marginBottom: 20,
                                borderBottom: '1px solid #DDDDDD',
                            }}
                        >
                            Perguntas
                        </div>
                        {data.allQuestion.map((d, i) => (
                            <div
                                style={{
                                    paddingLeft: 20,
                                    paddingBottom: 10,
                                }}
                            >
                                <p
                                    style={{
                                        paddingBottom: 4,
                                    }}
                                >
                                    {data.allQuestion[i].question}
                                </p>
                                {(data.allQuestion[i].correct === true) ? (
                                    <p
                                        style={{
                                            fontSize: 14,
                                            color: '#0DA800',
                                        }}
                                    >
                                        {data.allQuestion[i].response}
                                    </p>
                                ) : (
                                    <p
                                        style={{
                                            fontSize: 14,
                                            color: '#DE1A1A',
                                            paddingBottom: 2,
                                        }}
                                    >
                                        {data.allQuestion[i].response}
                                    </p>
                                )}
                                {(data.allQuestion[i].responseCorrect !== undefined) && (
                                    <p
                                        style={{
                                            fontSize: 14,
                                            color: '#0DA800',
                                        }}
                                    >
                                        {data.allQuestion[i].responseCorrect}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                    <div
                        style={{
                            flex: '35%',
                            minWidth: 200,
                        }}
                    >
                        <div
                            style={{
                                fontSize: 16,
                                color: '#606060',
                                paddingBottom: 4,
                                paddingLeft: 4,
                                borderBottom: '1px solid #DDDDDD',
                            }}
                        >
                            Aproveitamento
                        </div>
                        <div
                            style={{
                                fontSize: 16,
                                color: '#606060',
                                padding: 20,
                                borderBottom: '1px solid #DDDDDD',
                            }}
                        >
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
                                        {data.question}
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
                                        {data.response}
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
                                        {data.response * 100 / data.question}%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                fontSize: 16,
                                color: '#606060',
                                padding: '20px 0 4px 4px',
                                borderBottom: '1px solid #DDDDDD',
                            }}
                        >
                            Turma
                        </div>
                        <div
                            style={{
                                fontSize: 16,
                                color: '#606060',
                                padding: 20,
                                borderBottom: '1px solid #DDDDDD',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'block',
                                        textAlign: 'center',
                                        width: 100,
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: 10,
                                            color: '#A8A8A8',
                                            marginBottom: 6,
                                        }}
                                    >
                                        Alunos
                                    </div>
                                    <div
                                        style={{
                                            fontSize: 15,
                                            fontWeight: 500,
                                            color: '#2A2A2A',
                                        }}
                                    >
                                        {data.quantityStudent}
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: 'block',
                                        textAlign: 'center',
                                        width: 60,
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: 10,
                                            color: '#150C9D',
                                            marginBottom: 6,
                                        }}
                                    >
                                        Posição
                                    </div>
                                    <div
                                        style={{
                                            fontSize: 15,
                                            fontWeight: 500,
                                            color: '#150C9D',
                                        }}
                                    >
                                        {data.position}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <button type="submit"
                                    style={{
                                        width: '30%',
                                        borderRadius: 4,
                                        backgroundColor: '#150C9D',
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
                                >Imprimir</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
