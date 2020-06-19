import React from 'react';

import loadable from '@/utils/loadable';
import LoadingPage from '@/components/LoadingPage/LoadingPage';

const PageNotSignIn = loadable(() => import('@/pages/Auth/SignIn'), {
  fallback: <LoadingPage />,
});

export default [
  {
    path: '/login',
    exact: true,
    component: PageNotSignIn,
    restricted: true,
  },
];
