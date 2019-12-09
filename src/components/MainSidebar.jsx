import React, { Component } from 'react';

import Form from '../components/Form';
import Input from '../components/Input';
import DropDown from '../components/DropDown';

import CONSTANTS from '../constants/constants';

import CardApi from '../api/card';

class MainSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipient: '',
            eventType: '',
            orientation: '',
        }
        this.onChange = this.onChange.bind(this);
        this.createNewCard = this.createNewCard.bind(this);
    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value});
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

    render() {
        let {recipient, eventType, orientation} = this.state;

        return(
            <div className="col-lg-3 list-group">
                <h3>Create Card</h3>
                <br></br>
                <Form onSubmit={this.createNewCard}>
                    <Input type="text" name="recipient" value={recipient} onChange={this.onChange} placeholder="Recipient"></Input>
                    <DropDown name="eventType" value={eventType} onChange={this.onChange} options={CONSTANTS.EVENTS} placeholder="Select an event type"></DropDown>
                    <DropDown name="orientation" value={orientation} onChange={this.onChange} options={CONSTANTS.ORIENTATIONS} placeholder="Select an orientation"></DropDown>
                    <button type="submit" className="btn btn-secondary">Create</button>
                </Form>
            </div>
        );
    }  
}

export default MainSidebar;