import React from 'react';
import { Redirect } from 'react-router-dom';
import { DefaultLayout } from './layouts';
import { CoffeeList } from './pages/CoffeeList/CoffeeList';
import { ShakesList } from './pages/ShakesList/ShakesList';

export default [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/coffee" />,
  },
  {
    path: '/coffee',
    exact: true,
    layout: DefaultLayout,
    component: CoffeeList,
  },
  {
    path: '/shakes',
    layout: DefaultLayout,
    component: ShakesList,
  },
];
