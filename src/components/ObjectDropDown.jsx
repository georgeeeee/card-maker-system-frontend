import React, { Component } from 'react';

class ObjectDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if (this.props.onChange !== undefined) {
            let selectedElement = this.props.options.find((opt) => {return opt.elementId === event.target.value});
            this.props.onChange(selectedElement);
        }
    }

    render() {
        const {name, options, type, value, placeholder, containerClassName} = this.props;

        const optionList = [];

        if(options && type === 'text') {
            options.forEach((opt) => {
                optionList.push(<option key={opt.elementId} value={opt.elementId}>{`${opt.text}_(${opt.locationX},${opt.locationY})_${opt.fontName}`}</option>);
            });
        }

        return (
            <div className={`form-group ${containerClassName}`}>
                <select name={name} className="form-control" id={name} value={value.elementId} onChange={this.handleChange}>
                    <option value={{}}>{placeholder}</option>
                    {optionList}
                </select>
            </div>
        );
    }
};

export default ObjectDropDown;