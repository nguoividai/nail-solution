import React from 'react';
import List from '../components/list/List';
import SideNavToggle from './components/SideNavToggle';
import { useAppSelector } from 'src/types/redux.types';
import useSiteUrl from 'src/hooks/useSiteUrl';
import { formatPhoneNumber } from 'src/helpers/common.helpers';

const AppHeader = () => {
  const { shop } = useAppSelector((s) => s.shop);
  const { token } = useSiteUrl();
  const { auth } = useAppSelector((s) => s.authentication);
  const { url } = auth || {};
  const { logo, numberphone, address, name } = shop || {};

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
        <a href={`#/?token=${token}`}>
          <img style={{ width: 125 }} src={url + '/img/logo/' + logo} alt={name} />
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
            <span className="d-block open-text">
              Address <i className="icofont-google-map"></i>
            </span>
            {address}
          </List.ListItem>
          <List.ListItem className="open-hour">
            <span className="d-block open-text">
              Phone <i className="icofont-phone"></i>
            </span>
            <a className="text-decoration-none" href={`tel:${numberphone}`}>
              {formatPhoneNumber(numberphone)}
            </a>
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
