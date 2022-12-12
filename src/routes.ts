import React from 'react';

const NHomePage = React.lazy(() => import('./pages/nail/NHomePage'));
const NotFound = React.lazy(() => import('./pages/404/NotFound'));

const routes = [
  { path: '/', exact: true, name: 'Dashboard', element: NHomePage },
  { path: '*', name: 'ForgotPassword', element: NotFound },
];

export default routes;
