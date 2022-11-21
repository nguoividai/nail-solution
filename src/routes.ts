import React from 'react';

const DefaultReact = React.lazy(() => import('./pages/test/DefaultReact'));
const Login = React.lazy(() => import('./pages/login/Login'));
const ForgotPassword = React.lazy(() => import('./pages/forgotPassword/ForgotPassword'));
const CreateAccount = React.lazy(() => import('./pages/createAccount/CreateAccount'));
const JHomePage = React.lazy(() => import('./pages/jumia/JHomePage'));
const JMenu = React.lazy(() => import('./pages/jumia/JMenu'));

const routes = [
  { path: '/', exact: true, name: 'Dashboard', element: JHomePage },
  { path: '/menu', exact: true, name: 'Menu', element: JMenu },
  { path: '/login', exact: true, name: 'Login', element: Login },
  { path: '/forgot-password', exact: true, name: 'ForgotPassword', element: ForgotPassword },
  { path: '/sign-up', exact: true, name: 'ForgotPassword', element: CreateAccount },
];

export default routes;
