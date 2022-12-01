import React from 'react';

const AppFooter = () => {
  return (
    <div role="contentinfo" className="app-footer">
      <div className="row">
        <div className="col-12">
          <img
            style={{ width: 125 }}
            src={require('src/assets/images/top-logo-black.png')}
            alt="logo"
          />
          {/* <p className="description-logo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum dolor, fermentum
            etiam nisl.
          </p> */}
        </div>
      </div>
      {/* <div className="d-block d-md-none footer-center mt-1">
        <ul className="list list-horizontal mobile">
          <li className="list-item">Privacy Policy</li>
          <li className="list-item">Terms of Services</li>
        </ul>
      </div> */}
      {/* <div className="d-none d-md-block footer-center mt-2">
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
      </div> */}
    </div>
  );
};

export default React.memo(AppFooter);
