import React from 'react';
import { Redirect } from 'react-router-dom';
import { CheckoutLayout, DefaultLayout, LandingLayout } from './layouts';
import { CoffeeList } from './pages/CoffeeList/CoffeeList';
import { Home } from './pages/Home/Home';
import { OrderSummary } from './pages/OrderSummary/OrderSummary';
import { ShakesList } from './pages/ShakesList/ShakesList';
import { AddOns } from './pages/AddOns/AddOns';

export default [
  {
    path: '/',
    exact: true,
    layout: LandingLayout,
    component: () => <Redirect to="/home" />,
  },
  {
    path: '/home',
    exact: true,
    layout: LandingLayout,
    component: Home,
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
  {
    path: '/addons',
    layout: DefaultLayout,
    component: AddOns,
  },
  {
    path: '/order-summary',
    layout: CheckoutLayout,
    component: OrderSummary,
  },
];
