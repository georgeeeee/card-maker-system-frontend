import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav'

import Canvas from '../components/Canvas';

import CONSTANTS from '../constants/constants';
import PageApi from '../api/page';

class RecipientCardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            card : {},
            pages: [],
            selectedPageName: "front",
            currentPage: {}
        };

        this.handleNavSelect = this.handleNavSelect.bind(this);
        this.getPage = this.getPage.bind(this);
    }

    getPage(pageName, pages) {
        return pages.find(page => {return page.name === pageName;});
    }

    handleNavSelect(selectedPageName) {
        let selectedPage = this.getPage(selectedPageName, this.state.pages);
        this.setState({...this.state, currentPage:selectedPage, selectedPageName:selectedPageName});
    }

    componentDidMount() {
        const {cardId} = this.props.match.params;
        PageApi.listAllPages(cardId, (response)=> {
            let pages = response.card.pages;
            pages.push(CONSTANTS.BACKPAGE);
            
            let currentPage = this.getPage('front', pages);
            this.setState({...this.state, isLoading:false, card:response.card, pages:pages, currentPage:currentPage});
        });
    }

    render() {
        let {isLoading, pages, card, selectedPageName, currentPage} = this.state;
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
                    <div key={page.name} id={page.name} className={`tab-pane h-100 ${selectedPageName === page.name ? 'active' : ''}`}>
                        <Canvas images={page.images} texts={page.texts} orientation={orientation}></Canvas>
                    </div>
                );
            });
        }

        return (
            <div className="container main-container">
                { isLoading ? 
                    <div className="row">Loading... </div> 
                    :
                    <div className="row">
                        <div className="col-lg-12 list-group">
                            <div className="page-container">
                                <Nav variant="tabs" defaultActiveKey={selectedPageName}
                                    onSelect={selectedPageName => this.handleNavSelect(selectedPageName)}>
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

export default RecipientCardPage;