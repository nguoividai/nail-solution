import React from 'react';
import { useSearchParams } from 'react-router-dom';

const useSiteUrl = () => {
  const [searchParams] = useSearchParams();

  return searchParams.get('site_url');
};

export default useSiteUrl;
