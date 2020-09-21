import React from 'react';
import { Redirect } from 'react-router-dom';
import { DefaultLayout } from './layouts';
import { CoffeeListing } from './pages/CoffeeListing/CoffeeListing';
import { ShakesListing } from './pages/ShakesListing/ShakesListing';

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
    component: CoffeeListing,
  },
  {
    path: '/shakes',
    layout: DefaultLayout,
    component: ShakesListing,
  },
];
