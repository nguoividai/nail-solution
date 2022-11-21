import React from 'react';
import Button from '../components/button/Button';
import List from '../components/list/List';
import SocialLink from '../components/social/SocialLink';
import logo from 'src/assets/images/logo.png';

const AppFooter = () => {
  return (
    <div role="contentinfo" className="app-footer">
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <img className="logo" src={logo} alt="logo" style={{ width: 125 }} />
          <p className="description-logo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum dolor, fermentum
            etiam nisl.
          </p>
        </div>
        <div className="col-12"></div>
      </div>
      <div className="d-block d-md-none footer-center mt-1">
        <ul className="list list-horizontal mobile">
          <li className="list-item">Privacy Policy</li>
          <li className="list-item">Terms of Services</li>
        </ul>
      </div>
      <div className="d-none d-md-block footer-center mt-2">
        <ul className="list list-horizontal desktop">
          <li className="list-item">About us</li>
          <li className="list-item">Contact</li>
          <li className="list-item">Privacy Policy</li>
          <li className="list-item">Sitemap</li>
          <li className="list-item">Terms of Services</li>
        </ul>

        <div className="social-list d-flex p-2">
          <SocialLink size="sm" icon="icofont-facebook" />
          <SocialLink size="sm" icon="icofont-linkedin" />
          <SocialLink size="sm" icon="icofont-twitter" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(AppFooter);
