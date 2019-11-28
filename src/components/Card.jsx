import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orientation: props.orientation.toLowerCase()
        };
    }

    render() {
        const {orientation} = this.state;
        return (
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="/cards" className="card-box-link">
                        <span className={`card-box ${orientation}`}>
                            Birthday Card for sami
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