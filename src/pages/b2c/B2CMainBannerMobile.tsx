import React from 'react';
import SliderSimple from 'src/components/slider/SliderSimple';
import rectangle from 'src/assets/images/jumia/Rectangle 1.jpg';
import banner from 'src/assets/images/jumia/banner.jpg';

const B2CMainBanner = () => {
  return (
    <SliderSimple
      className="d-xs-block d-sm-block d-md-none d-lg-none hompage-banner"
      settings={{
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 10000,
      }}
    >
      <div>
        <img src={rectangle} alt="banner" />
      </div>
      <div>
        <img src={rectangle} alt="banner" />
      </div>
      <div>
        <img src={rectangle} alt="banner" />
      </div>
      <div>
        <img src={rectangle} alt="banner" />
      </div>
    </SliderSimple>
  );
};

export default React.memo(B2CMainBanner);
