import { lazy } from 'react';


const routes = [
  {
    path: '/login',
    component: lazy(() => import('../pages/login')),
  },
  {
    path: '/register',
    component: lazy(() => import('../pages/register')),
  },
  {
    path: '/404',
    component: lazy(() => import('../pages/page404')),
  },
  {
    path: '/home',
    component: lazy(() => import('../pages/home')),
  },
  {
    path: '/news',
    component: lazy(() => import('../pages/news')),
  },
];

export default routes;