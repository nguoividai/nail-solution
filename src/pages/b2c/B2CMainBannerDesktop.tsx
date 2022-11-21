import React from 'react';
import SliderSimple from 'src/components/slider/SliderSimple';
import rectangle from 'src/assets/images/jumia/Rectangle 1.jpg';
import banner from 'src/assets/images/jumia/banner.jpg';

const B2CMainBanner = () => {
  return (
    <SliderSimple
      className="d-none d-md-block d-lg-block d-xl-block hompage-banner"
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
        <img src={banner} alt="banner" />
      </div>
      <div>
        <img src={banner} alt="banner" />
      </div>
      <div>
        <img src={banner} alt="banner" />
      </div>
      <div>
        <img src={banner} alt="banner" />
      </div>
    </SliderSimple>
  );
};

export default React.memo(B2CMainBanner);
