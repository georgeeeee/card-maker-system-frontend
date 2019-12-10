import React, { Component } from 'react';

import Modal from '../Modal';

import CardApi from '../../api/card';

class ShowImagesModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }

    componentDidMount() {
        CardApi.getImagesFromS3((response) => {
            this.setState({ images:response.images });
        });
    }

    render() {
        let { isModalOpen } = this.props;
        let { images } = this.state;

        let imageList = []
        if(images) {
            images.forEach((img) => {
                imageList.push(
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href={img} className="image-thumbnail" >
                                <img src={img} alt="Lights" />
                            </a>
                        </div>
                    </div>
                );
            });
        }

        return(
            <Modal isOpen={isModalOpen}>
                <div className="Modal__content">
                <div className="Modal__header clearfix">
                    <h2 className="Modal__heading">Edit Text</h2>
                    <button type="button" className="Button--close" onClick={this.props.closeModal}>&times;</button>
                </div>
                <div className="Modal__body  clearfix">
                    <div className="row">
                        {imageList}
                    </div>
                </div>
                </div>
            </Modal>
        );
    }
}

export default ShowImagesModal;