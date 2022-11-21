import React from 'react';
import CardProduct from 'src/components/card/CardProduct';
import Section from 'src/components/section/Section';
import SliderSimple from 'src/components/slider/SliderSimple';
import hamburger from 'src/assets/images/jumia/hamburger.png';

const B2CMostFoodList = () => {
  return (
    <Section title="Most Wanted Foods">
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
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '70px',
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '120px',
              },
            },
          ],
        }}
      >
        <div className="row d-flex row-gap-1">
          <div className="col-12">
            <CardProduct
              title="Peperoni Pizza"
              description="Hot beef with fry Hot beef with fry Hot beef with fry"
              src={hamburger}
              price={30}
              likeNumber={93}
            />
          </div>
          <div className="col-12">
            <CardProduct
              title="Peperoni Pizza"
              description="Hot beef with fry Hot beef with fry Hot beef with fry"
              src={hamburger}
              price={30}
              likeNumber={93}
            />
          </div>
        </div>
        <div className="row d-flex row-gap-1">
          <div className="col-12">
            <CardProduct
              title="Peperoni Pizza"
              description="Hot beef with fry Hot beef with fry Hot beef with fry"
              src={hamburger}
              price={30}
              likeNumber={93}
            />
          </div>
          <div className="col-12">
            <CardProduct
              title="Peperoni Pizza"
              description="Hot beef with fry Hot beef with fry Hot beef with fry"
              src={hamburger}
              price={30}
              likeNumber={93}
            />
          </div>
        </div>
        <div className="row d-flex row-gap-1">
          <div className="col-12">
            <CardProduct
              title="Peperoni Pizza"
              description="Hot beef with fry Hot beef with fry Hot beef with fry"
              src={hamburger}
              price={30}
              likeNumber={93}
            />
          </div>
          <div className="col-12">
            <CardProduct
              title="Peperoni Pizza"
              description="Hot beef with fry Hot beef with fry Hot beef with fry"
              src={hamburger}
              price={30}
              likeNumber={93}
            />
          </div>
        </div>
      </SliderSimple>
    </Section>
  );
};

export default React.memo(B2CMostFoodList);
