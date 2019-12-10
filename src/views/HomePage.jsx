import React, { Component } from 'react';

import Card from '../components/Card';
import MainSidebar from '../components/MainSidebar';

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

        if(cards) {
            cards.forEach((card) => {
                cardsList.push(<Card key={card.cardId} card={card} {...this.props}></Card>);
            });
        }

        return (
            <div className="container main-container">
                { isLoading ? 
                    <div className="row">Loading... </div> 
                    :
                    <div className="row">
                        <MainSidebar cards={cards}/>
                        <div className="col-lg-9 list-group">
                            <div className="row"> 
                                {cardsList!=null ? cardsList : "Empty Cards"}
                            </div>
                        </div>
                    </div>
                }
            </div>
		);
	}
};

export default HomePage;