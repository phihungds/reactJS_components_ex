import React from 'react';

class Button extends React.Component {
    render() {
        return ( 
            <React.StrictMode> 
            <button 
                type='button'
                className='btn btn-primary mx-sm-3'
                onClick={this.props.onClick}
                label={this.props.label}
            /></React.StrictMode>
        )
    }
}


export default Button