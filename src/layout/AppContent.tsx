import React from 'react';
import { Outlet } from 'react-router-dom';
import Button from 'src/components/button/Button';
import CardDescription from 'src/components/card/CardDescription';
import CardProduct from 'src/components/card/CardProduct';
import CardPromotion from 'src/components/card/CardPromotion';
import CardReview from 'src/components/card/CardReview';
import List from 'src/components/list/List';
import SliderSimple from 'src/components/slider/SliderSimple';

const AppContent = () => {
  return (
    <div className="app-content">
      <Outlet />
      {/* Slider */}
      {/* <SliderSimple>
        {Array.from(new Array(5)).map((item, index) => (
          <div className="w-full" key={index}>
            <img src={require('../assets/images/panorama.jpg')} alt="banner" />
          </div>
        ))}
      </SliderSimple> */}
      {/* Card */}
      {/* <List title="" layout="horizontal">
        <CardDescription icon="icofont-telegram" title="top" subTitle="top123" />
        <CardDescription icon="icofont-telegram" title="top" subTitle="top123" />
        <CardDescription icon="icofont-telegram" title="top" subTitle="top123" />
        <CardDescription icon="icofont-telegram" title="top" subTitle="top123" />
      </List> */}
      {/* Promotion */}
      {/* <CardPromotion
        title="20% off"
        name="all orders"
        conditionText="20$20$20$20$20$20$ 20$20$20$"
      />
      <Button color="primary" shape="normal" size="md">
        Order Delivery
      </Button>
      <Button color="white" shape="normal" size="md">
        Order Delivery
      </Button>
      <CardProduct
        src={require('../assets/images/panorama.jpg')}
        title="Order"
        description="Order description"
        price={30}
        likeNumber={90}
      ></CardProduct>
      <CardReview username="top" reviewText="Order" rate={1.5} /> */}
    </div>
  );
};

export default React.memo(AppContent);
