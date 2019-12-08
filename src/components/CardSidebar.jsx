import React, { Component } from 'react';

import AddTextModal from '../components/modals/AddTextModal';

import CONSTANTS from '../constants/constants';

import CardApi from '../api/card';

class CardSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddTextModalOpen: false
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

    render() {
        let {isAddTextModalOpen} = this.state;

        return(
            <div className="col-lg-3 list-group">
                <h3>Edit Pages in Card</h3>
                <br></br>
                <button type="button" className="btn btn-info" onClick={this.openAddTextModal}>Add Text</button>
                <br></br>
                <button type="button" className="btn btn-secondary">Edit Text</button>
                <br></br>
                <button type="button" className="btn btn-info">Add Image</button>
                <br></br>
                <button type="button" className="btn btn-secondary">Edit Image</button>
                <AddTextModal isModalOpen={isAddTextModalOpen} closeModal={this.closeAddTextModal}/>
            </div>
        );
    }  
}

export default CardSidebar;