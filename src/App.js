import React, { Component } from 'react';

import './App.scss';

// Routing libraries
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';

import Header from './components/Header';

import HomePage from './views/HomePage';
import CardPage from './views/CardPage';
import RecipientCardPage from './views/RecipientCardPage';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {rehydrated: false};
    }

    render() {
        return (
        <HttpsRedirect>
            <Router>
            <div className="App">
                <Header />
                <Switch>
                    <PublicRoute exact path="/" component={HomePage}></PublicRoute>
                    <PublicRoute exact path="/card/:cardId" component={CardPage}></PublicRoute>
                    <PublicRoute path="/recipient-view/:cardId/" component={RecipientCardPage}></PublicRoute>
                </Switch>
            </div>
            </Router>
        </HttpsRedirect>
        );
    }
}

const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {

        return (
        <div className="App__wrapper">
            <Component {...props} />
        </div>
        );
    }
}/>);

export default App;
