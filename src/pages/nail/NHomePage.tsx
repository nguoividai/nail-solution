import React from 'react';
import B2CStep from '../b2c/B2CStep';
import B2CMainBannerDesktop from '../b2c/B2CMainBannerDesktop';
import B2CFooterMobile from '../b2c/B2CFooterMobile';
import { useAppDispatch } from 'src/types/redux.types';

const NHomePage = () => {
  return (
    <>
      <B2CMainBannerDesktop />

      <B2CStep />

      <B2CFooterMobile />
    </>
  );
};

export default React.memo(NHomePage);
