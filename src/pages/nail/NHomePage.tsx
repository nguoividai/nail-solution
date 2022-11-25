import React from 'react';
import B2CStep from '../b2c/B2CStep';
import B2CMainBannerDesktop from '../b2c/B2CMainBannerDesktop';
import { useAppSelector } from 'src/types/redux.types';

const NHomePage = () => {
  const { bookingForm } = useAppSelector((s) => s.booking);
  return (
    <>
      <B2CMainBannerDesktop />

      <B2CStep />
    </>
  );
};

export default React.memo(NHomePage);
