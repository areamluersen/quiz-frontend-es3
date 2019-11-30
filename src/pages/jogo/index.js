import React,  { Component } from 'react';
import Jogo from './Game'
import {questionsArray, questions} from './questions';

export default class Game extends Component {
    constructor(){
        super();
        this.state={
            countQuestion: 0,
            question: questionsArray[0]
        }
    }

    nextQuestion(){
        const count = this.state.countQuestion+1;
        this.setState({question: questionsArray[count], countQuestion: count})
    }

    render() {
        const data = this.state.question;
        console.log('questions.length:', questionsArray.length);
        console.log('this.state.countQuestion', this.state.countQuestion)

        return (
            <Jogo data={data} nextQuestion={() => this.nextQuestion()} endQuestion={questionsArray.length === this.state.countQuestion+1}/>
        )
    }
}
