import React,  { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import Question from "./components/Question";
import Response from "./components/Response";

export default class Game extends Component {

    render() {
        const {data, nextQuestion, endQuestion} = this.props;
        console.log(this.props);

        return (
            <div
                className="product"
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingBottom: 20,
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
                                    width: 100,
                                    borderRadius: 4,
                                    backgroundColor: '#150C9D',
                                    color: '#FFFFFF',
                                    border: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={() => console.log(endQuestion) || !endQuestion? nextQuestion() : 
                                window.location.href = 'http://localhost:3000/consultarDesempenho'
                                

                                
                                }
                        >
                                Próxima
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
