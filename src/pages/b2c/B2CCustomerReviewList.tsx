import React from 'react';
import CardReview from 'src/components/card/CardReview';
import Section from 'src/components/section/Section';
import SliderSimple from 'src/components/slider/SliderSimple';

const B2CCustomerReviewList = () => {
  return (
    <Section
      title="Customer Reviews"
      style={{
        background: '#FFFFFF',
      }}
    >
      <SliderSimple
        settings={{
          speed: 500,
          autoplay: true,
          autoplaySpeed: 5000,
          infinite: true,
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [
            {
              breakpoint: 576,
              settings: {
                infinite: true,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '50px',
              },
            },
            {
              breakpoint: 768,
              settings: {
                infinite: true,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '50px',
              },
            },
          ],
        }}
      >
        <div className="row d-flex row-gap-1">
          <div className="col-12">
            <CardReview
              username="Pedro Alexander"
              reviewText="customer reviews the paid versions let you create customizable review invitations, share ratings and reviews . "
              rate={1.5}
            />
          </div>
        </div>
        <div className="row d-flex row-gap-1">
          <div className="col-12">
            <CardReview
              username="Pedro Alexander"
              reviewText="customer reviews the paid versions let you create customizable review invitations, share ratings and reviews . "
              rate={1.5}
            />
          </div>
        </div>
        <div className="row d-flex row-gap-1">
          <div className="col-12">
            <CardReview
              username="Pedro Alexander"
              reviewText="customer reviews the paid versions let you create customizable review invitations, share ratings and reviews . "
              rate={1.5}
            />
          </div>
        </div>
      </SliderSimple>
    </Section>
  );
};

export default React.memo(B2CCustomerReviewList);
