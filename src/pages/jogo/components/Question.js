import React,  { Component } from 'react';

export default class Question extends React.Component<{ question: string }> {
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    padding: '20px',
                }}
            >
                <p
                    style={{
                        fontSize: 16,
                        color: '#2A2A2A',
                    }}
                >
                    {this.props.question}
                </p>
            </div>
        )
    }
}
