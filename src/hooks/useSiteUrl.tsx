import React from 'react';
import { useSearchParams } from 'react-router-dom';

const useSiteUrl = () => {
  const [searchParams] = useSearchParams();

  return { token: searchParams.get('token') };
};

export default useSiteUrl;
