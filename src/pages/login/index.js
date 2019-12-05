import React,  { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Login extends Component {
    render() {
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
                    Entrar
                </h1>
                <p
                    style={{
                        fontSize: 16,
                        color: '#606060',
                        paddingBottom: 12,
                    }}
                >
                    CPF
                </p>
                <input
                    className="input"
                    type="text" name="cpf" placeholder="000.000.000-00" maxLength={11}
                />
                <p
                    style={{
                        fontSize: 16,
                        color: '#606060',
                        paddingTop: 30,
                        paddingBottom: 12,
                    }}
                >
                    Senha
                </p>
                <input
                    className="input"
                   type="password" name="password" placeholder="******" minLength={6} maxLength={8} />
                <button type="submit"
                    style={{
                        width: '100%',
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
                    >Entrar</Link>
                </button>
            </div>
        )
    }
}
