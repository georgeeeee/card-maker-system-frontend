import React, { Component } from 'react';

import Modal from '../Modal';
import Form from '../Form';
import Input from '../Input';
import DropDown from '../DropDown';

import CONSTANTS from '../../constants/constants';

class AddTextModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            locationX: '',
            locationY: '',
            font: '',
            fontSize: '',
            fontType: ''
        }
    
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({...this.state, [event.target.name]: event.target.value});
    }

    render() {
        let { isModalOpen } = this.props;
        let {text, locationX, locationY, font, fontSize, fontType} = this.state;

        return(
            <Modal isOpen={isModalOpen}>
                <div className="Modal__content LoginModal">
                <div className="Modal__header clearfix">
                    <h2 className="Modal__heading">Add Text</h2>
                    <button type="button" className="Button--close" onClick={this.props.closeModal}>&times;</button>
                </div>
                <div className="Modal__body  clearfix">
                    <Form onSubmit={this.createNewCard}>
                        <Input type="text" name="text" value={text} onChange={this.onChange} placeholder="Enter Text"></Input>
                        <Input type="number" name="locationX" value={locationX} onChange={this.onChange} placeholder="Location X"></Input>
                        <Input type="number" name="locationY" value={locationY} onChange={this.onChange} placeholder="Location Y"></Input>
                        <DropDown name="font" value={font} onChange={this.onChange} options={CONSTANTS.FONTS} placeholder="Font"></DropDown>
                        <DropDown name="fontSize" value={fontSize} onChange={this.onChange} options={CONSTANTS.FONTSIZES} placeholder="Font size"></DropDown>
                        <DropDown name="fontType" value={fontType} onChange={this.onChange} options={CONSTANTS.FONTTYPES} placeholder="Font type"></DropDown>
                        <button type="submit" className="btn btn-secondary">Add Text</button>
                    </Form>
                </div>
                </div>
            </Modal>
        );
    }
}

export default AddTextModal;