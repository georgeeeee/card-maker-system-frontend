import React, { Component } from 'react';

class Sidebar extends Component {
    state = {
        selected: 'home',
        expanded: true
    };

    onSelect = (selected) => {
        this.setState({ selected: selected });
    };

    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };

    render() {
        const { selected } = this.state;

        return(
            <div className="col-lg-3">
                <div className="list-group">
                    <a href="#" className="list-group-item">Category 1</a>
                    <a href="#" className="list-group-item">Category 2</a>
                    <a href="#" className="list-group-item">Category 3</a>
                </div>

            </div>
        );
    }  
}

export default Sidebar;