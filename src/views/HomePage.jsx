import React, { Component } from 'react';

import Card from '../components/Card';
import Sidebar from '../components/Sidebar';

import CardApi from '../api/card';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            cards : []
        };
    }

    componentDidMount() {
        CardApi.listAllCards((response)=> {
            this.setState({...this.state, isLoading:false, cards:response.cardsList});
        });
    }

    render() {
        let {isLoading, cards} = this.state;

        const cardsList = [];
        cards.forEach((card) => {
            cardsList.push(<Card key={card.cardId} orientation={card.orientation}></Card>);
        });

        return (
            <div className="container main-container">
                { isLoading ? 
                    <div className="row">Loading... </div> 
                    :
                    <div className="row">
                        <Sidebar></Sidebar>
                        <div className="col-lg-9 list-group">
                            <div className="row"> 
                                {cardsList}
                            </div>
                        </div>
                    </div>
                }
            </div>
		);
	}
};

export default HomePage;