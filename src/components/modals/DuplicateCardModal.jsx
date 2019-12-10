import React, { Component } from 'react';

import Modal from '../Modal';
import Form from '../Form';
import Input from '../Input';
import ObjectDropDown from '../ObjectDropDown';

import CONSTANTS from '../../constants/constants';

import ElementApi from '../../api/elements';

class DuplicateCardModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCard: {},
            cards: props.cards,
            recipient: ''
        }

        this.onChange = this.onChange.bind(this);
        this.selectCard= this.selectCard.bind(this);
        this.duplicateCard = this.duplicateCard.bind(this);
    }

    onChange(event) {
        this.setState({...this.state, [event.target.name]: event.target.value});
    }

    selectCard(card) {
        this.setState({...this.state, selectedCard:card});
    }

    duplicateCard() {
        // const {currentPage, selectedTextElement} = this.state;

        // ElementApi.deleteElement(currentPage.pageId, selectedTextElement.elementId, (response) => {
        //     window.location.reload(true);
        // });
    }

    componentWillReceiveProps({cards}) {
        this.setState({...this.state, cards})
    }

    render() {
        let { isModalOpen } = this.props;
        let {selectedCard, cards, recipient} = this.state;

        return(
            <Modal isOpen={isModalOpen}>
                <div className="Modal__content">
                <div className="Modal__header clearfix">
                    <h2 className="Modal__heading">Edit Text</h2>
                    <button type="button" className="Button--close" onClick={this.props.closeModal}>&times;</button>
                </div>
                <div className="Modal__body  clearfix">
                    <ObjectDropDown name="selectedCard" 
                                value={selectedCard} options={cards}
                                onChange={this.selectCard} type="card"
                                placeholder="Select card to duplicate"></ObjectDropDown>
                    
                    { Object.keys(selectedCard).length !== 0 ?
                        <div>
                            <Form onSubmit={this.duplicateCard}>
                                <Input type="text" name="recipient" value={recipient} onChange={this.onChange} placeholder="Enter Recipient"></Input>
                                <button type="submit" className="btn btn-secondary" disabled={!recipient}>Duplicate Card</button>
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

export default DuplicateCardModal;