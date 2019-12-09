import React, { Component } from 'react';

import Modal from '../Modal';
import Form from '../Form';
import Input from '../Input';
import DropDown from '../DropDown';
import ObjectDropDown from '../ObjectDropDown';

import CONSTANTS from '../../constants/constants';

import ElementApi from '../../api/elements';

class EditTextModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTextElement: {},
            textElements: props.currentPage.texts,
            currentPage: props.currentPage
        }

        this.onChange = this.onChange.bind(this);
        this.editText = this.editText.bind(this);
        this.selectTextElement = this.selectTextElement.bind(this);
        this.deleteText = this.deleteText.bind(this);
    }

    onChange(event) {
        this.setState({...this.state, selectedTextElement:{...this.state.selectedTextElement, [event.target.name]:event.target.value}});
    }

    selectTextElement(element) {
        this.setState({...this.state, selectedTextElement:element});
    }

    editText() {
        const {currentPage, selectedTextElement} = this.state;

        // ElementApi.editTextElement(currentPage.pageId, selectedTextElement, (response) => {
        //     window.location.reload(true);
        // }) ;

    }

    deleteText() {
        const {currentPage, selectedTextElement} = this.state;

        ElementApi.deleteElement(currentPage.pageId, selectedTextElement.elementId, (response) => {
            window.location.reload(true);
        });
    }

    componentWillReceiveProps({currentPage}) {
        this.setState({...this.state, currentPage, textElements:currentPage.texts})
    }

    render() {
        let { isModalOpen } = this.props;
        let {selectedTextElement, textElements} = this.state;

        return(
            <Modal isOpen={isModalOpen}>
                <div className="Modal__content">
                <div className="Modal__header clearfix">
                    <h2 className="Modal__heading">Edit Text</h2>
                    <button type="button" className="Button--close" onClick={this.props.closeModal}>&times;</button>
                </div>
                <div className="Modal__body  clearfix">
                    <ObjectDropDown name="selectedTextElement" 
                                value={selectedTextElement} options={textElements}
                                onChange={this.selectTextElement} type="text"
                                placeholder="Select element to edit"></ObjectDropDown>
                    
                    { Object.keys(selectedTextElement).length !== 0 ?
                        <div>
                            <Form onSubmit={this.editText}>
                                <Input type="text" name="text" value={selectedTextElement.text} onChange={this.onChange} placeholder="Enter Text"></Input>
                                <Input type="number" name="locationX" value={selectedTextElement.locationX} onChange={this.onChange} placeholder="Location X"></Input>
                                <Input type="number" name="locationY" value={selectedTextElement.locationY} onChange={this.onChange} placeholder="Location Y"></Input>
                                <DropDown name="fontName" value={selectedTextElement.fontName} onChange={this.onChange} options={CONSTANTS.FONTS} placeholder="Font name"></DropDown>
                                <DropDown name="fontSize" value={selectedTextElement.fontSize} onChange={this.onChange} options={CONSTANTS.FONTSIZES} placeholder="Font size"></DropDown>
                                <DropDown name="fontType" value={selectedTextElement.fontType} onChange={this.onChange} options={CONSTANTS.FONTTYPES} placeholder="Font type"></DropDown>
                                <button type="submit" className="btn btn-secondary">Edit Text</button>
                                <button type="button" className="btn btn-danger" onClick={this.deleteText}>Delete</button>
                            </Form>
                        </div>
                        : null
                    }
                </div>
                </div>
            </Modal>
        );
    }
}

export default EditTextModal;