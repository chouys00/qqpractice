import React from 'react';

const routes = [
  // {
  //   path: '/login',
  //   component: React.lazy(() => import("../pages/login/login.js")),
  // },
  {
    path: '/',
    component: () => import('../pages/login/login.js'),
  },
  {
    path: '/register',
    component: () => import('../pages/register/register'),
  },
];

export default routes;