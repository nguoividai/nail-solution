import React from 'react';
import B2CStep from '../b2c/B2CStep';
import B2CMainBannerDesktop from '../b2c/B2CMainBannerDesktop';

const NHomePage = () => {
  return (
    <>
      <B2CMainBannerDesktop />

      <B2CStep />
    </>
  );
};

export default React.memo(NHomePage);
