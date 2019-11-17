import React, { Component } from 'react';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import createLogo from '../assets/images/create.png';
import homeLogo from '../assets/images/home.png';
import editLogo from '../assets/images/edit.png';

import '../react-sidenav.css';

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
            <SideNav onSelect={this.onSelect} onToggle={this.onToggle}>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="create" selected={selected}>
                <NavItem eventKey="home">
                    <NavIcon>
                        <img className="icon" src={homeLogo} alt="Home" />
                    </NavIcon>
                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="create">
                    <NavIcon>
                        <img className="icon" src={createLogo} alt="Create" />
                    </NavIcon>
                    <NavText>
                        Create
                    </NavText>
                </NavItem>
                <NavItem eventKey="edit">
                    <NavIcon>
                        <img className="icon" src={editLogo} alt="Edit" />
                    </NavIcon>
                    <NavText>
                        Edit
                    </NavText>
                    <NavItem eventKey="edit/main">
                        <NavText>
                            Main Workspace
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="edit/text">
                        <NavText>
                            Add Text
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="edit/image">
                        <NavText>
                            Add Image
                        </NavText>
                    </NavItem>
                </NavItem>
                </SideNav.Nav>
            </SideNav>
        );
    }  
}

export default Sidebar;