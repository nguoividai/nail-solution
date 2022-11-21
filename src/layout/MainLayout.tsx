import React from 'react';
import AppContent from './AppContent';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

const MainLayout = () => {
  return (
    <>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </>
  );
};

export default React.memo(MainLayout);
