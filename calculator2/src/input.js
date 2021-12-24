import React, { Component } from "react";

class Input extends React.Component {
    render() {
        return (
            <input 
            type={this.props.type}
            onChange={this.props.onChange}
        />)
    }
}

export default Input