import { lazy } from 'react';
import login from '../pages/login';
import register from '../pages/register';
import page404 from '../pages/page404';
import home from '../pages/home';
import news from '../pages/news';


const routes = [
  {
    path: '/',
    component: login,
  },
  {
    path: '/register',
    component: register,
  },
  {
    path: '/404',
    component: page404,
  },
  {
    path: '/home',
    component: home,
  },
  {
    path: '/news',
    component: news,
  },


  // {
  //   path: '/',
  //   component: lazy(() => import('../pages/login')),
  // },
  // {
  //   path: '/register',
  //   component: lazy(() => import('../pages/register')),
  // },
  // {
  //   path: '/404',
  //   component: lazy(() => import('../pages/page404')),
  // },
  // {
  //   path: '/home',
  //   component: lazy(() => import('../pages/home')),
  // },
  // {
  //   path: '/news',
  //   component: lazy(() => import('../pages/news')),
  // },
];

export default routes;