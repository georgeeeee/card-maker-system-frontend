import React, { Component } from 'react';

class Header extends Component {

	render() {
		return (
			<header className="Header sticky bg-dark p-3 text-white text-center">
                <div className="container container-fluid">
                    <h1 className="h3 m-0">Card Maker</h1>
                </div>
			</header>
		);
	}
};

export default Header;