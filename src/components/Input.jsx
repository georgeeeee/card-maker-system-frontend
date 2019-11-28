import React, { Component } from 'react';

class Input extends Component {

    render() {
        const {type, placeholder, name, value, errorMessage, className, containerClassName} = this.props;

        return (
            <div className={`Input__container ${containerClassName}`}>
                <input className={`${containerClassName}`}></input>
                {errorMessage ? <span className="error"></span> : null}
            </div>
        );
    }
};

export default Input;