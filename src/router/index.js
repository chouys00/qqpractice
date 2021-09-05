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
  // {
  //   path: "/nested",
  //   component: React.lazy(() => import("../components/Nested")),
  //   routes: [
  //     {
  //       path: "/cmp-1",
  //       component: React.lazy(() => import("../components/CmpOne"))
  //     },
  //     {
  //       path: "/cmp-2",
  //       component: React.lazy(() => import("../components/CmpTwo"))
  //     }
  //   ]
  // }
];

export default routes;