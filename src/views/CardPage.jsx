import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav'

import Canvas from '../components/Canvas';
import CardSidebar from '../components/CardSidebar';

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
                        <CardSidebar></CardSidebar>
                        <div className="col-lg-9 list-group">
                            <div className="page-container">
                                <Nav variant="tabs" defaultActiveKey={selectedKey}
                                    onSelect={selectedKey => this.handleNavSelect(selectedKey)}>
                                    <Nav.Item>
                                        <Nav.Link eventKey="front">First</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="innerLeft">Inner Left</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="innerRight">Inner Right</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="back">Back</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <div className="tab-content h-100">
                                    <div id="link-0" className={`tab-pane h-100 ${selectedKey==='front'? 'active' : ''}`}>
                                        <Canvas images={[]} texts={pages[0].texts} orientation={orientation}></Canvas>
                                    </div>
                                    <div id="link-1" className={`tab-pane h-100 ${selectedKey==='innerLeft'? 'active' : ''}`}>
                                        <Canvas images={[]} texts={pages[1].texts} orientation={orientation}></Canvas>
                                    </div>
                                    <div id="link-2" className={`tab-pane h-100 ${selectedKey==='innerRight'? 'active' : ''}`}>
                                        <Canvas images={[]} texts={pages[2].texts} orientation={orientation}></Canvas>
                                    </div>
                                    <div id="link-3" className={`tab-pane h-100 ${selectedKey==='back'? 'active' : ''}`}>
                                        <Canvas images={[]} texts={[]} orientation={orientation}></Canvas>
                                    </div>
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