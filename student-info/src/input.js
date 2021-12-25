import React from 'react';

class Input extends React.Component {
    render() {
        return ( 
            <React.StrictMode> 
            <input 
                type='text'
                onChange={this.props.onChange}
                placeholder={this.props.placeholder}
            /></React.StrictMode>
        )
    }
}


export default Input