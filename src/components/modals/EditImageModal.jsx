import React, { Component } from 'react';

import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'

import Modal from '../Modal';
import Form from '../Form';
import Input from '../Input';

import ElementApi from '../../api/elements';

class EditImageModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImageElement: {},
            imageElements: props.currentPage.images,
            currentPage: props.currentPage
        }

        this.onChange = this.onChange.bind(this);
        this.editImage = this.editImage.bind(this);
        this.selectImage = this.selectImage.bind(this);
        this.deleteImage = this.deleteImage.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
    }

    onChange(event) {
        this.setState({...this.state, selectedImageElement:{...this.state.selectedImageElement, [event.target.name]:event.target.value}});
    }

    selectImage(selection) {
        this.setState({selectedImageElement: selection.value});
    }

    uploadFile(event) {
        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                // imagePreviewUrl: reader.result,
                fileName: file.name
            });
        }

        reader.readAsDataURL(file)
    }

    editImage() {
        const {selectedImageElement, currentPage} = this.state;

        var imageData = selectedImageElement;
        imageData.isReplaceImage = false;

        ElementApi.editImageElement(currentPage.pageId, imageData.elementId, imageData, (response) => {
            window.location.reload(true);
        }) ;

    }

    deleteImage() {
        const {currentPage, selectedImageElement} = this.state;

        ElementApi.deleteElement(currentPage.pageId, selectedImageElement.elementId, (response) => {
            window.location.reload(true);
        });
    }

    componentWillReceiveProps({currentPage}) {
        this.setState({...this.state, currentPage, imageElements:currentPage.images})
    }

    render() {
        let { isModalOpen } = this.props;
        let {selectedImageElement, imageElements} = this.state;

        return(
            <Modal isOpen={isModalOpen}>
                <div className="Modal__content">
                <div className="Modal__header clearfix">
                    <h2 className="Modal__heading">Edit Image</h2>
                    <button type="button" className="Button--close" onClick={this.props.closeModal}>&times;</button>
                </div>
                <div className="Modal__body  clearfix">
                    <div>
                        <p className="left">Select an image to edit:</p>
                        <ImagePicker images={imageElements.map((image) => ({src:image.imageUrl, value:image}))}
                                    onPick={this.selectImage} />
                    </div>
                    <br></br>
                    
                    { Object.keys(selectedImageElement).length !== 0 ?
                        <div>
                            <Form onSubmit={this.editImage} className="form-container">
                                <Input type="file" name="fileName" accept="image/*" onChange={this.uploadFile} placeholder="Choose Image"></Input>
                                <Input type="number" name="locationX" value={selectedImageElement.locationX} onChange={this.onChange} placeholder="Location X"></Input>
                                <Input type="number" name="locationY" value={selectedImageElement.locationY} onChange={this.onChange} placeholder="Location Y"></Input>
                                <Input type="number" name="width" value={selectedImageElement.width} onChange={this.onChange} placeholder="Width"></Input>
                                <Input type="number" name="height" value={selectedImageElement.height} onChange={this.onChange} placeholder="Height"></Input>
                                <button type="submit" className="btn btn-secondary">Edit Image</button>
                                <button type="button" onClick={this.deleteImage} className="btn btn-danger">Delete</button>
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

export default EditImageModal;