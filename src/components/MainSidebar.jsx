import React, { Component } from 'react';

import Form from '../components/Form';
import Input from '../components/Input';
import DropDown from '../components/DropDown';
import ShowImagesModal from '../components/modals/ShowImagesModal';
import DuplicateCardModal from '../components/modals/DuplicateCardModal';

import CONSTANTS from '../constants/constants';

import CardApi from '../api/card';

class MainSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipient: '',
            eventType: '',
            orientation: '',
            cards: props.cards,
            isDupilcateCardModalOpen: false,
            isShowImagesModalOpen: false,
        }
        this.onChange = this.onChange.bind(this);
        this.createNewCard = this.createNewCard.bind(this);
        this.openDuplicateCardModal = this.openDuplicateCardModal.bind(this);
        this.openShowImagesModal = this.openShowImagesModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    openDuplicateCardModal() {
        this.setState({isDupilcateCardModalOpen: true});
    }

    openShowImagesModal() {
        this.setState({isShowImagesModalOpen: true});
    }

    closeModal() {
        this.setState({isDupilcateCardModalOpen:false, isShowImagesModalOpen:false});
    }

    createNewCard() {
        const {recipient, eventType, orientation} = this.state;
        const card = {
            recipient,
            eventType,
            orientation
        }
        CardApi.addCard(card, (response) => {
            window.location.reload(true);
        }) ;

    }

    componentWillReceiveProps({cards}) {
        this.setState({...this.state, cards})
    }

    render() {
        let {recipient, eventType, orientation, cards, isDupilcateCardModalOpen, isShowImagesModalOpen} = this.state;

        return(
            <div className="col-lg-3 list-group">
                <h3>Create Card</h3>
                <br></br>
                <Form onSubmit={this.createNewCard}>
                    <Input type="text" name="recipient" value={recipient} onChange={this.onChange} placeholder="Recipient"></Input>
                    <DropDown name="eventType" value={eventType} onChange={this.onChange} options={CONSTANTS.EVENTS} placeholder="Select an event type"></DropDown>
                    <DropDown name="orientation" value={orientation} onChange={this.onChange} options={CONSTANTS.ORIENTATIONS} placeholder="Select an orientation"></DropDown>
                    <button type="submit" className="btn btn-block btn-secondary" disabled={!recipient && !eventType && !orientation}>Create</button>
                </Form>
                <br></br>
                <button type="button" className="btn btn-info" onClick={this.openDuplicateCardModal}>Duplicate Card</button>
                <br></br>
                <button type="button" className="btn btn-success" onClick={this.openShowImagesModal}>Show All Images</button>
                { isDupilcateCardModalOpen ? <DuplicateCardModal cards={cards}
                    isModalOpen={true} closeModal={this.closeModal}/> : null }
                { isShowImagesModalOpen ? <ShowImagesModal isModalOpen={true} 
                    closeModal={this.closeModal} /> :null}
            </div>
        );
    }  
}

export default MainSidebar;