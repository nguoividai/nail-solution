import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSiteUrl from 'src/hooks/useSiteUrl';
import AppContent from './AppContent';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

const MainLayout = () => {
  const siteUrl = useSiteUrl();
  const navigate = useNavigate();

  useEffect(() => {
    if (!siteUrl || siteUrl === 'null') {
      navigate('/not-found');
    }
  }, [siteUrl, navigate]);

  return (
    <>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </>
  );
};

export default React.memo(MainLayout);
