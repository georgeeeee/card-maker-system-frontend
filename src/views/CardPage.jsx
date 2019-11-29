import React, { Component } from 'react';

import Card from '../components/Card';
import Sidebar from '../components/Sidebar';

import PageApi from '../api/page';

class CardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            card : {},
            pages: []
        };
    }

    componentDidMount() {
        const {cardId} = this.props.match.params;
        PageApi.listAllPages(cardId, (response)=> {
            this.setState({...this.state, isLoading:false, card:response.card, pages:response.card.pages});
        });
    }

    render() {
        let {isLoading, card, pages} = this.state;

        const pageList = [];

        if(pages) {
            pages.forEach((page) => {
                pageList.push();
            });
        }

        return (
            <div className="container main-container">
                { isLoading ? 
                    <div className="row">Loading... </div> 
                    :
                    <div className="row">
                        <Sidebar></Sidebar>
                        <div className="col-lg-9 list-group">
                            <div className="page-container">

                            </div>
                        </div>
                    </div>
                }
            </div>
		);
	}
};

export default CardPage;