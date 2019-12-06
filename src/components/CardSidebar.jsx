import React, { Component } from 'react';

import Form from '../components/Form';
import Input from '../components/Input';
import DropDown from '../components/DropDown';

import CONSTANTS from '../constants/constants';

import CardApi from '../api/card';

class CardSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {

        return(
            <div className="col-lg-3 list-group">
                <h3>Edit Pages in Card</h3>
                <br></br>
                {/* <Form onSubmit={this.createNewCard}>
                    <Input type="text" name="recipient" value={recipient} onChange={this.onChange} placeholder="Recipient"></Input>
                    <DropDown name="eventType" value={eventType} onChange={this.onChange} options={CONSTANTS.EVENTS} placeholder="Select an event type"></DropDown>
                    <DropDown name="orientation" value={orientation} onChange={this.onChange} options={CONSTANTS.ORIENTATIONS} placeholder="Select an orientation"></DropDown>
                    <button type="submit" className="btn btn-secondary">Create</button>
                </Form> */}
            </div>
        );
    }  
}

export default CardSidebar;