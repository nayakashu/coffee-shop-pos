import React from 'react';
import { Redirect } from 'react-router-dom';
import { CheckoutLayout, DefaultLayout, LandingLayout } from './layouts';
import { Addons } from './pages/Addons/Addons';
import { DrippedCoffees } from './pages/DrippedCoffees/DrippedCoffees';
import { Home } from './pages/Home/Home';
import { Lattes } from './pages/Lattes/Lattes';
import { OrderSummary } from './pages/OrderSummary/OrderSummary';
import { Smoothies } from './pages/Smoothies/Smoothies';

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
    path: '/dripped-coffees',
    exact: true,
    layout: DefaultLayout,
    component: DrippedCoffees,
  },
  {
    path: '/lattes',
    exact: true,
    layout: DefaultLayout,
    component: Lattes,
  },
  {
    path: '/smoothies',
    layout: DefaultLayout,
    component: Smoothies,
  },
  {
    path: '/addons/:type',
    layout: DefaultLayout,
    component: Addons,
  },
  {
    path: '/order-summary',
    layout: CheckoutLayout,
    component: OrderSummary,
  },
];
