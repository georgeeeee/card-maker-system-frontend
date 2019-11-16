import React, { PureComponent } from 'react';
import Breadcrumbs from '@trendmicro/react-breadcrumbs';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Button, ButtonGroup } from '@trendmicro/react-buttons';
import Dropdown, { MenuItem } from '@trendmicro/react-dropdown';
import ensureArray from 'ensure-array';
import styled from 'styled-components';

import homeLogo from './img/home.png';
import createLogo from './img/create.png';
import editLogo from './img/edit.png';

import './App.css';
import './react-sidenav.css';

const Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
    padding: 0 20px;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;

export default class extends PureComponent {
  state = {
    selected: 'home',
    expanded: false
  };

  onSelect = (selected) => {
        this.setState({ selected: selected });
  };
  onToggle = (expanded) => {
      this.setState({ expanded: expanded });
  };

  pageTitle = {
      'home': 'Home',
      'create': ['Create'],
      'edit': ['Edit'],
      'edit/main': ['Edit', 'Main Workspace'],
      'edit/text': ['Edit', 'Add Text'],
      'edit/image': ['Edit', 'Add Image']
  };

  renderBreadcrumbs() {
      const { selected } = this.state;
      const list = ensureArray(this.pageTitle[selected]);

      return (
          <Breadcrumbs>
              {list.map((item, index) => (
                  <Breadcrumbs.Item
                      active={index === list.length - 1}
                      key={`${selected}_${index}`}
                  >
                      {item}
                  </Breadcrumbs.Item>
              ))}
          </Breadcrumbs>
      );
  }

  navigate = (pathname) => () => {
      this.setState({ selected: pathname });
  };

  render() {
      const { expanded, selected } = this.state;

      return (
        <div>
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
          <Main expanded={expanded}>
              {this.renderBreadcrumbs()}
              <p>Hi</p>
          </Main>
      </div>
    );
  }
};
