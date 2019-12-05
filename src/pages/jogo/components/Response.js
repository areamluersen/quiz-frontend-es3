import React,  { Component } from 'react';

type Props = {
    selected?: boolean;
    response: boolean;
}

export default class Response extends React.Component<Props> {
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    padding: '8px 20px',
                }}
            >
                {this.props.selected && (
                    <div
                        style={{
                            minWidth: 16,
                            maxWidth: 16,
                            minHeight: 16,
                            maxHeight: 16,
                            border: '4px solid #150C9D',
                            borderRadius: '50%',
                            alignSelf: 'center',
                        }}
                    />
                )}
                {!this.props.selected && (
                    <div
                        style={{
                            minWidth: 16,
                            maxWidth: 16,
                            minHeight: 16,
                            maxHeight: 16,
                            border: '4px solid #A8A8A8',
                            borderRadius: '50%',
                            alignSelf: 'center',
                        }}
                    />
                )}
                <p
                    style={{
                        fontSize: 14,
                        color: '#606060',
                        marginLeft: 10,
                    }}
                >
                    {this.props.response}
                </p>
            </div>
        )
    }
}
