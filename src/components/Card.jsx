import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: props.card
        };
    }

    render() {
        let card = this.state.card;
        card.orientation = card.orientation.toLowerCase();

        return (
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="/cards" className="card-box-link">
                        <span className={`card-box ${card.orientation}`}>
                            {`${card.eventType} card for ${card.recipient}`}
                        </span>
                    </a>
                    <div className="card-footer">
                        <button className="btn btn-outline-success">View</button>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Card;