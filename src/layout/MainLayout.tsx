import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthentication } from 'src/features/authentication/actions';
import useSiteUrl from 'src/hooks/useSiteUrl';
import { useAppDispatch, useAppSelector } from 'src/types/redux.types';
import AppContent from './AppContent';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

const MainLayout = () => {
  const { auth } = useAppSelector((s) => s.authentication);
  const { url } = auth || {};
  const navigate = useNavigate();
  const { token } = useSiteUrl();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!token) {
      navigate('/not-found');
    }

    if ((!url || url === 'null') && token) {
      dispatch(getAuthentication({ token }));
    }
  }, [url, token, dispatch, navigate]);

  return (
    <>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </>
  );
};

export default React.memo(MainLayout);
