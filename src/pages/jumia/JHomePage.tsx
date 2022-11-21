import React from 'react';
import Button from 'src/components/button/Button';
import B2CMainBanner from '../b2c/B2CMainBannerDesktop';
import B2CCriteria from '../b2c/B2CCriteria';
import B2CPromotionList from '../b2c/B2CPromotionList';
import B2CMostFoodList from '../b2c/B2CMostFoodList';
import B2CCustomerReviewList from '../b2c/B2CCustomerReviewList';
import B2CMainBannerDesktop from '../b2c/B2CMainBannerDesktop';
import B2CMainBannerMobile from '../b2c/B2CMainBannerMobile';
import CallAction from 'src/components/banner/CallAction';
import pizza from 'src/assets/images/jumia/pizza-bg.jpg';

const JHomePage = () => {
  return (
    <>
      <div>
        <B2CMainBannerDesktop />

        <B2CMainBannerMobile />

        <B2CCriteria />

        <B2CPromotionList />

        <B2CMostFoodList />

        <CallAction
          className="d-none d-md-flex d-lg-flex d-xl-flex"
          src={pizza}
          heading="Order in KFC Restourant"
          description="  Order in KFC Restourant and Order in KFC Restou"
          action={
            <>
              <Button color="primary" shape="normal" size="md">
                Order Delivery
              </Button>
              <Button color="white" shape="normal" size="md">
                Order Delivery
              </Button>
            </>
          }
        />

        <div
          className="d-flex d-md-none d-lg-none text-center"
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
        >
          <Button color="primary" shape="normal" size="md">
            Order Delivery
          </Button>
          <Button color="white" shape="normal" size="md">
            Order Delivery
          </Button>
        </div>
        <B2CCustomerReviewList />
      </div>
    </>
  );
};

export default React.memo(JHomePage);
