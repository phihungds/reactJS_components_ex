import React from 'react';



class Button extends React.Component {
    render() {
        return ( 
            
            <button 
                type='button'
                className='btn btn-primary mx-sm-3'
                onClick={this.props.onClick}
                children={this.props.children}
            />
        )
    }
}


export default Button