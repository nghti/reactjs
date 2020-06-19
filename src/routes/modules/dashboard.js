import React from 'react';

import loadable from '@/utils/loadable';
import LoadingPage from '@/components/LoadingPage/LoadingPage';

const PageDashboard = loadable(() => import('@/pages/Dashboard/Dashboard'), {
  fallback: <LoadingPage />,
});

const PageForm = loadable(() => import('@/pages/Dashboard/Form'), {
  fallback: <LoadingPage />,
});

const PageTable = loadable(() => import('@/pages/Dashboard/Table'), {
  fallback: <LoadingPage />,
});

export default [
  {
    path: '/',
    exact: true,
    component: PageDashboard,
    requiredAuth: true,
    layout: true,
  },
  {
    path: '/form',
    exact: true,
    component: PageForm,
    requiredAuth: true,
    layout: true,
  },
  {
    path: '/table',
    exact: true,
    component: PageTable,
    requiredAuth: true,
    layout: true,
  },
];
