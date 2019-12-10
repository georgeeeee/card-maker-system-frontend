import React, { Component } from 'react';

import Modal from '../Modal';
import Form from '../Form';
import Input from '../Input';

import ElementApi from '../../api/elements';

class AddImageModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            fileName: '',
            locationX: '',
            locationY: '',
            width: '',
            height: '',
            currentPage: props.currentPage
        }
    
        this.onChange = this.onChange.bind(this);
        this.addImage= this.addImage.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
    }

    onChange(event) {
        this.setState({...this.state, [event.target.name]: event.target.value});
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

    addImage() {
        const {currentPage, fileName, locationX, locationY, width, height, file} = this.state;
        const imageElement = {
            pageId: currentPage.pageId,
            fileName,
            locationX,
            locationY,
            width,
            height
        }

        ElementApi.addImageElement(currentPage.pageId, imageElement, (response) => {
            let body = JSON.parse(response.body);
            let {presignedUrl} = body;
            ElementApi.uploadImageToS3(presignedUrl, file, (response) => {
                window.location.reload(true);
            });
        }) ;

    }

    componentWillReceiveProps({currentPage}) {
        this.setState({...this.state, currentPage})
    }

    render() {
        let { isModalOpen } = this.props;
        let {locationX, locationY, width, height} = this.state;

        let isAddButtonDisabled = !locationX || !locationY || !width || !height;

        return(
            <Modal isOpen={isModalOpen}>
                <div className="Modal__content">
                <div className="Modal__header clearfix">
                    <h2 className="Modal__heading">Add Image</h2>
                    <button type="button" className="Button--close" onClick={this.props.closeModal}>&times;</button>
                </div>
                <div className="Modal__body  clearfix">
                    <Form onSubmit={this.addImage}>
                        <Input type="file" name="fileName" accept="image/*" onChange={this.uploadFile} placeholder="Choose Image"></Input>
                        <Input type="number" name="locationX" value={locationX} onChange={this.onChange} placeholder="Location X"></Input>
                        <Input type="number" name="locationY" value={locationY} onChange={this.onChange} placeholder="Location Y"></Input>
                        <Input type="number" name="width" value={width} onChange={this.onChange} placeholder="Width"></Input>
                        <Input type="number" name="height" value={height} onChange={this.onChange} placeholder="Height"></Input>
                        <button type="submit" className="btn btn-secondary" disabled={isAddButtonDisabled}>Add Image</button>
                    </Form>
                </div>
                </div>
            </Modal>
        );
    }
}

export default AddImageModal;