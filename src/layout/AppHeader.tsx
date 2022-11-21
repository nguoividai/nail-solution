import React from 'react';
import Button from '../components/button/Button';
import List from '../components/list/List';
import SideNavToggle from './components/SideNavToggle';
import logo from 'src/assets/images/logo.png';

import home from 'src/assets/images/jumia/icons/home.png';
import menu from 'src/assets/images/jumia/icons/menu.png';
import account from 'src/assets/images/jumia/icons/account.png';

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="side-nav-icon">
        <SideNavToggle />
      </div>
      <div className="logo text-center">
        <strong>
          <img src={logo} alt="logo" />
        </strong>
      </div>

      <div className="nav-link">
        <List className="list-header" layout="horizontal">
          <List.ListItem>
            <img src={home} alt="icon" style={{ width: 20 }} /> Home
          </List.ListItem>
          <List.ListItem>
            <img src={menu} alt="icon" style={{ width: 20 }} /> Menu
          </List.ListItem>
          <List.ListItem>
            <img src={account} alt="icon" style={{ width: 20 }} /> My Account
          </List.ListItem>
          <List.ListItem className="open-hour">
            <span className="d-block open-text">Open</span>
            Accepting DoorDash orders until 11:39 PM
          </List.ListItem>
        </List>
      </div>
      <div className="action">
        <div className="d-flex d-xs-flex d-sm-flex d-md-flex d-lg-none open">
          <div className="ellipse"></div>
          <span>OPEN</span>
        </div>
        <a className="d-none d-lg-block cart" href="#/">
          <i className="icofont-cart-alt"></i> 2
        </a>
      </div>
    </header>
  );
};

export default React.memo(AppHeader);
