import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav'

import Canvas from '../components/Canvas';
import CardSidebar from '../components/CardSidebar';

import CONSTANTS from '../constants/constants';

import PageApi from '../api/page';

class CardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            card : {},
            pages: [],
            selectedKey: "front"
        };

        this.handleNavSelect = this.handleNavSelect.bind(this);
        this.parsePages = this.parsePages.bind(this);
    }

    parsePages(pages) {
        let currState = this.state;
        pages.forEach((page) => {
            currState[page.name] = page;
        });
        this.setState({currState});
    }

    handleNavSelect(selectedKey) {
        this.setState({...this.state, selectedKey:selectedKey});
    }

    componentDidMount() {
        const {cardId} = this.props.match.params;
        PageApi.listAllPages(cardId, (response)=> {
            this.parsePages(response.card.pages);
            this.setState({...this.state, isLoading:false, card:response.card, pages:response.card.pages});
        });
    }

    render() {
        let {isLoading, pages, card, selectedKey} = this.state;
        const orientation = card.orientation;
        const pageNavLinks = [];
        const pageContents = [];

        
        CONSTANTS.PAGENAMES.forEach((pageName) => {
            pageNavLinks.push(
                <Nav.Item key={pageName}>
                    <Nav.Link eventKey={pageName}>{pageName}</Nav.Link>
                </Nav.Item>
            );
        });

        if(pages) {
            pages.forEach((page) => {
                pageContents.push(
                    <div key={page.name} id={page.name} className={`tab-pane h-100 ${selectedKey === page.name ? 'active' : ''}`}>
                        <Canvas images={page.images} texts={page.texts} orientation={orientation}></Canvas>
                    </div>
                );
            });

            pageContents.push(
                <div key='back" id="back' className={`tab-pane h-100 ${selectedKey === 'back' ? 'active' : ''}`}>
                        <Canvas images={[]} texts={[]} orientation={orientation}></Canvas>
                </div>
            );
        }

        return (
            <div className="container main-container">
                { isLoading ? 
                    <div className="row">Loading... </div> 
                    :
                    <div className="row">
                        <CardSidebar></CardSidebar>
                        <div className="col-lg-9 list-group">
                            <div className="page-container">
                                <Nav variant="tabs" defaultActiveKey={selectedKey}
                                    onSelect={selectedKey => this.handleNavSelect(selectedKey)}>
                                    {pageNavLinks}
                                </Nav>
                                <div className="tab-content h-100">
                                    {pageContents}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
		);
	}
};

export default CardPage;