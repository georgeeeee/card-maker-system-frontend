import React, { Component } from 'react';

import Sidebar from '../components/Sidebar';

class HomePage extends Component {

    render() {
        return (
            <div>
                <Sidebar></Sidebar>
                <div className="container-fluid">
                    <div className="row content min-vh-100 align-items-center">
                        Content Here
                    </div>
                </div>
            </div>
		);
	}
};

export default HomePage;