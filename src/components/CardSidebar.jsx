import React, { Component } from 'react';

import AddTextModal from '../components/modals/AddTextModal';
import EditTextModal from '../components/modals/EditTextModal';

class CardSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddTextModalOpen: false,
            isEditTextModalOpen: false,
            isAddImageModalOpen:false, 
            isEditImageModalOpen:false,
            currentPage: props.currentPage,
            isEditingDisabled: false
        }

        this.openAddTextModal = this.openAddTextModal.bind(this);
        this.openEditTextModal = this.openEditTextModal.bind(this);
        this.openAddImageModal = this.openAddImageModal.bind(this);
        this.openEditImageModal = this.openEditImageModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openAddTextModal() {
        this.setState({...this.state, isAddTextModalOpen:true});
    }

    openEditTextModal() {
        this.setState({...this.state, isEditTextModalOpen:true});
    }

    openAddImageModal() {
        this.setState({...this.state, isAddImageModalOpen:true});
    }

    openEditImageModal() {
        this.setState({...this.state, isEditImageModalOpen:true});
    }

    closeModal() {
        this.setState({...this.state, isAddTextModalOpen:false, 
                        isEditTextModalOpen:false, isAddImageModalOpen:false, 
                        isEditImageModalOpen:false});
    }

    componentWillReceiveProps({currentPage}) {
        this.setState({...this.state, currentPage, isEditingDisabled:currentPage.name==='back'})
    }

    render() {
        let {isAddTextModalOpen, isEditTextModalOpen, isAddImageModalOpen, 
            isEditImageModalOpen, currentPage, isEditingDisabled} = this.state;

        return(
            <div className="col-lg-3 list-group">
                <h3>Edit Pages in Card</h3>
                <br></br>
                <button type="button" className="btn btn-info" 
                        onClick={this.openAddTextModal} 
                        disabled={isEditingDisabled}>
                    Add Text</button>
                <br></br>
                <button type="button" className="btn btn-secondary"
                        onClick={this.openEditTextModal}
                        disabled={isEditingDisabled}>
                    Edit Text</button>
                <br></br>
                <button type="button" className="btn btn-info"
                        onClick={this.openAddImageModal}
                        disabled={isEditingDisabled}>
                    Add Image</button>
                <br></br>
                <button type="button" className="btn btn-secondary"
                        onClick={this.openEditImageModal}
                        disabled={isEditingDisabled}>
                    Edit Image</button>
                <AddTextModal currentPage={currentPage} isModalOpen={isAddTextModalOpen} 
                    closeModal={this.closeModal}/>
                <EditTextModal currentPage={currentPage}
                    isModalOpen={isEditTextModalOpen} 
                    closeModal={this.closeModal}/>
            </div>
        );
    }  
}

export default CardSidebar;