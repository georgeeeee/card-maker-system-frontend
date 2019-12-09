import React, { Component } from 'react';

import Modal from '../Modal';
import Form from '../Form';
import Input from '../Input';
import DropDown from '../DropDown';

import CONSTANTS from '../../constants/constants';

import ElementApi from '../../api/elements';

class AddImageModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            locationX: '',
            locationY: '',
            fontName: '',
            fontSize: '',
            fontType: '',
            currentPage: props.currentPage
        }
    
        this.onChange = this.onChange.bind(this);
        this.addText = this.addText.bind(this);
    }

    onChange(event) {
        this.setState({...this.state, [event.target.name]: event.target.value});
    }

    addText() {
        const {currentPage, text, fontName, fontType, fontSize, locationX, locationY} = this.state;
        const textElement = {
            pageId: currentPage.pageId,
            text,
            fontName,
            fontType,
            fontSize,
            locationX,
            locationY
        }

        ElementApi.addTextElement(currentPage.pageId, textElement, (response) => {
            window.location.reload(true);
        }) ;

    }

    componentWillReceiveProps({currentPage}) {
        this.setState({...this.state, currentPage})
    }

    render() {
        let { isModalOpen } = this.props;
        let {text, locationX, locationY, fontName, fontSize, fontType} = this.state;

        return(
            <Modal isOpen={isModalOpen}>
                <div className="Modal__content">
                <div className="Modal__header clearfix">
                    <h2 className="Modal__heading">Add Text</h2>
                    <button type="button" className="Button--close" onClick={this.props.closeModal}>&times;</button>
                </div>
                <div className="Modal__body  clearfix">
                    <Form onSubmit={this.addText}>
                        <Input type="text" name="text" value={text} onChange={this.onChange} placeholder="Enter Text"></Input>
                        <Input type="number" name="locationX" value={locationX} onChange={this.onChange} placeholder="Location X"></Input>
                        <Input type="number" name="locationY" value={locationY} onChange={this.onChange} placeholder="Location Y"></Input>
                        <DropDown name="fontName" value={fontName} onChange={this.onChange} options={CONSTANTS.FONTS} placeholder="Font name"></DropDown>
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

export default AddImageModal;