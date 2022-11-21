import React from 'react';
import CardPromotion from 'src/components/card/CardPromotion';
import SliderSimple from 'src/components/slider/SliderSimple';

const B2CPromotionList = () => {
  return (
    <SliderSimple
      className="container"
      settings={{
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerMode: true,
              centerPadding: '5px',
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerMode: true,
              centerPadding: '30px',
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              centerMode: true,
              centerPadding: '30px',
            },
          },
        ],
      }}
    >
      <div>
        <CardPromotion title="20% OFF" conditionText="When you order £20 or over" />
      </div>
      <div>
        <CardPromotion title="20% OFF" conditionText="When you order £20 or over" />
      </div>
      <div>
        <CardPromotion title="20% OFF" conditionText="When you order £20 or over" />
      </div>
      <div>
        <CardPromotion title="20% OFF" conditionText="When you order £20 or over" />
      </div>
    </SliderSimple>
  );
};

export default React.memo(B2CPromotionList);
