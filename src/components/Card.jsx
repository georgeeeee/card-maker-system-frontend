import React, { Component } from 'react';

import {Link} from 'react-router-dom';

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
                        <Link className="btn btn-outline-success" to={`/card/${card.cardId}`}>View</Link>
                        <Link className="btn btn-outline-info" to={`/recipient-view/${card.cardId}`}>Recipient</Link>
                        <button className="btn btn-danger" onClick={this.deleteCard.bind(this, card.cardId)}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Card;