import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
class Button extends React.Component {
    render() {
        return (
            <button 
                type= {this.props.type}
                onClick={this.props.onClick}
                label= {this.props.label}
                className='btn btn-primary mx-sm-3'
            />
        )
    }
}

export default Button