import React from 'react';
import List from '../components/list/List';
import SideNavToggle from './components/SideNavToggle';
import useSiteUrl from 'src/hooks/useSiteUrl';

const AppHeader = () => {
  const siteUrl = useSiteUrl();
  return (
    <header className="app-header">
      <div className="side-nav-icon">
        <SideNavToggle />
      </div>
      <div className="logo text-center d-block">
        {/* <strong className="d-block">TIFFANY NAILS & SPA</strong>
        <span className="d-block" style={{ marginTop: 5 }}>
          (720) 283-6777
        </span> */}
        <a href={`#/?site_url=${siteUrl}`}>
          <img
            style={{ width: 125 }}
            src={require('src/assets/images/top-logo-black.png')}
            alt="logo"
          />
        </a>
      </div>

      <div className="nav-link">
        <List className="list-header" layout="horizontal">
          {/* <List.ListItem>
            <img src={home} alt="icon" style={{ width: 20 }} /> Home
          </List.ListItem>
          <List.ListItem>
            <img src={menu} alt="icon" style={{ width: 20 }} /> Menu
          </List.ListItem>
          <List.ListItem>
            <img src={account} alt="icon" style={{ width: 20 }} /> My Account
          </List.ListItem> */}
          <List.ListItem className="open-hour">
            <span className="d-block open-text">Address</span>
            1240 W LITTLETON BLVD #100A, LITTLETON CO 80120
          </List.ListItem>
          <List.ListItem className="open-hour">
            <span className="d-block open-text">Open</span>
            Accepting DoorDash orders until 18:30 PM
          </List.ListItem>
        </List>
      </div>
      <div className="action">
        <div className="d-flex d-xs-flex d-sm-flex d-md-flex d-lg-none open">
          <div className="ellipse"></div>
          <span>BOOKING</span>
        </div>
        {/* <a className="d-none d-lg-block cart" href="#/">
          <i className="icofont-cart-alt"></i> 2
        </a> */}
      </div>
    </header>
  );
};

export default React.memo(AppHeader);
