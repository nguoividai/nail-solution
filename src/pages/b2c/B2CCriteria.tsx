import React from 'react';
import CardDescription from 'src/components/card/CardDescription';
import SliderSimple from 'src/components/slider/SliderSimple';

const B2CCriteria = () => {
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
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '80px',
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerMode: true,
              centerPadding: '40px',
            },
          },
        ],
      }}
    >
      <div>
        <CardDescription
          icon="icofont-ticket"
          title="Fast Delivery"
          subTitle="Fastest Delivery in Birmingham"
        />
      </div>
      <div>
        <CardDescription
          icon="icofont-ticket"
          title="Fast Delivery"
          subTitle="Fastest Delivery in Birmingham"
        />
      </div>
      <div>
        <CardDescription
          icon="icofont-ticket"
          title="Fast Delivery"
          subTitle="Fastest Delivery in Birmingham"
        />
      </div>
      <div>
        <CardDescription
          icon="icofont-ticket"
          title="Fast Delivery"
          subTitle="Fastest Delivery in Birmingham"
        />
      </div>
    </SliderSimple>
  );
};

export default React.memo(B2CCriteria);
