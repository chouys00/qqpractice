import React from 'react';

const routes = [
  // {
  //   path: '/login',
  //   component: React.lazy(() => import("../pages/login")),
  // },
  {
    path: '/',
    component: () => import('../pages/login'),
  },
  {
    path: '/register',
    component: () => import('../pages/register'),
  },
  {
    path: '/404',
    component: () => import('../pages/page404'),
  },
  {
    path: '/home',
    component: () => import('../pages/home'),
  },
  {
    path: '/news',
    component: () => import('../pages/news'),
  },
];

export default routes;