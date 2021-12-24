import React, { Component } from "react";
import Input from './input'

class Calculator extends React.Component {

    constructor() {
        super();
        this.state = {
            firstNum : 0,
            secondNum: 0
        }
    }

    render() {
        return (
            <div>
            <Input 
                type='number' 
                onChange={
                    (e) => {
                     this.setState({firstNum: e.target.value})
                    }
                }/>
            <br/> <br/>
            <Input type='number'
                onChange={
                    (e) => {
                     this.setState({secondNum: e.target.value})
                    }
                }/>
            </div>)
    }
}



export default Calculator