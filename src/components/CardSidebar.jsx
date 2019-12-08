import React, { Component } from 'react';

import AddTextModal from '../components/modals/AddTextModal';

class CardSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddTextModalOpen: false,
            currentPage: props.currentPage,
            isEditingDisabled: false
        }

        this.openAddTextModal = this.openAddTextModal.bind(this);
        this.closeAddTextModal = this.closeAddTextModal.bind(this);
    }

    openAddTextModal() {
        this.setState({...this.state, isAddTextModalOpen:true});
    }

    closeAddTextModal() {
        this.setState({...this.state, isAddTextModalOpen:false});
    }

    componentWillReceiveProps({currentPage}) {
        this.setState({...this.state, currentPage, isEditingDisabled:currentPage.name==='back'})
    }

    render() {
        let {isAddTextModalOpen, currentPage, isEditingDisabled} = this.state;

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
                        disabled={isEditingDisabled}>
                    Edit Text</button>
                <br></br>
                <button type="button" className="btn btn-info"
                        disabled={isEditingDisabled}>
                    Add Image</button>
                <br></br>
                <button type="button" className="btn btn-secondary"
                        disabled={isEditingDisabled}>
                    Edit Image</button>
                <AddTextModal currentPage={currentPage} isModalOpen={isAddTextModalOpen} closeModal={this.closeAddTextModal}/>
            </div>
        );
    }  
}

export default CardSidebar;