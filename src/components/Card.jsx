import React, { Component } from 'react';

import CardApi from '../api/card';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: props.card
        };
        this.viewCard = this.viewCard.bind(this);
        this.recipientView = this.recipientView.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
    }

    viewCard(cardId) {
        this.props.history.push(`card/${cardId}`);
    }

    recipientView(cardId) {
        this.props.history.push(`recipient-view/${cardId}`);
    }

    deleteCard(cardId) {
        CardApi.deleteCard(cardId, () => {
            window.location.reload(true);
        });
    }

    render() {
        let card = this.state.card;

        return (
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href={`card/${card.cardId}`} className="card-box-link">
                        <span className={`card-box ${card.orientation}`}>
                            {`${card.eventType} card for ${card.recipient}`}
                        </span>
                    </a>
                    <div className="card-footer">
                        <a className="btn btn-outline-success" href={`card/${card.cardId}`}>View</a>
                        <a className="btn btn-outline-info" href={`recipient-view/${card.cardId}`} target="_blank">Recipient</a>
                        <a className="btn btn-danger"><span onClick={this.deleteCard.bind(this, card.cardId)}>Delete</span></a>
                    </div>
                </div>
            </div>
        );
    }
};

export default Card;