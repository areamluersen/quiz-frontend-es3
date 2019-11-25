import React,  { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import '../styles.css';
import Question from "./components/Question";
import Response from "./components/Response";

export default class Game extends Component {

    render() {
        const data = {
            fase: 3,
            numberQuestion: 4,
            totalQuestion: 5,
            descriptionPergunt: 'Qual o grupo em que todas as palavras foram escritas corretamente?',
            optionRespost1: 'Asterístico, beneficiente, meteorologia, entertido',
            optionRespost2: 'Asterisco, beneficente, meteorologia, entretido',
            optionRespost3: 'Asterisco, beneficente, metereologia, entretido',
            optionRespost4: 'Asterístico, beneficiente, metereologia, entretido',
            respostCorrect: 2,
        };

        return (
            <div
                className="product"
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingBottom: 50,
                    }}
                >
                    <h1
                        style={{
                            fontSize: 36,
                            fontWeight: 600,
                            color: '#2A2A2A',
                        }}
                    >
                        Quiz
                    </h1>
                    <div
                        style={{
                            textAlign: 'right',
                            alignSelf: 'center',
                        }}
                    >
                        <p
                            style={{
                                fontSize: 11,
                                fontWeight: 400,
                                color: '#A8A8A8',
                            }}
                        >
                            Fase
                        </p>
                        <p
                            style={{
                                fontSize: 14,
                                fontWeight: 600,
                                color: '#606060',
                            }}
                        >
                            {data.fase}
                        </p>
                    </div>
                </div>
                <div
                    style={{
                        display: 'block',
                        marginLeft: 2,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            paddingBottom: 4,
                        }}
                    >
                        <div
                            style={{
                                textAlign: 'right',
                                alignSelf: 'center',
                            }}
                        >
                            <p
                                style={{
                                    fontSize: 11,
                                    color: '#A8A8A8',
                                }}
                            >
                                Perguntas
                            </p>
                        </div>
                        <div
                            style={{
                                textAlign: 'right',
                                alignSelf: 'center',
                            }}
                        >
                            <p
                                style={{
                                    fontSize: 11,
                                    color: '#A8A8A8',
                                }}
                            >
                                {data.numberQuestion}/{data.totalQuestion}
                            </p>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: 4, borderRadius: 2, backgroundColor: '#A8A8A8' }}>
                        <div style={{ width: `${(data.numberQuestion * 100) / data.totalQuestion}%`, height: 4, borderRadius: 2, backgroundColor: '#150C9D' }} />
                    </div>
                    <Question question={data.descriptionPergunt} />
                    <Response response={data.optionRespost1} selected={data.respostCorrect === 1}/>
                    <Response response={data.optionRespost2} selected={data.respostCorrect === 2}/>
                    <Response response={data.optionRespost3} selected={data.respostCorrect === 3}/>
                    <Response response={data.optionRespost4} selected={data.respostCorrect === 4}/>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            paddingTop: 20,
                        }}
                    >
                        <div
                            style={{
                                width: 60,
                                alignSelf: 'center',
                                textAlign: 'center'
                            }}
                        >
                            <p
                                style={{
                                    fontSize: 12,
                                    color: '#150C9D',
                                }}
                            >
                                120
                            </p>
                            <p
                                style={{
                                    fontSize: 8,
                                    color: '#150C9D',
                                }}
                            >
                                SEGUNDOS
                            </p>
                        </div>
                        <button type="submit"
                                style={{
                                    width: 100,
                                    borderRadius: 4,
                                    backgroundColor: '#150C9D',
                                    border: 0,
                                    cursor: 'pointer',
                                }}
                        >
                            <Link to={"/consultarDesempenho"}
                                  style={{
                                      display: 'flex',
                                      justifyContent: 'center',
                                      color: '#FFFFFF',
                                      textDecoration: 'none',
                                      fontSize: 16,
                                      padding: 12,
                                  }}
                            >
                                Próxima
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
