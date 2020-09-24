import React from 'react';
import { Redirect } from 'react-router-dom';
import { DefaultLayout, Landing } from './layouts';
import { CoffeeList } from './pages/CoffeeList/CoffeeList';
import { Home } from './pages/Home/Home';
import { ShakesList } from './pages/ShakesList/ShakesList';
import { ToppingsList } from './pages/ToppingsList/ToppingsList';

export default [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/home" />,
  },
  {
    path: '/home',
    exact: true,
    layout: Landing,
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
    path: '/customization/toppings/:id',
    layout: DefaultLayout,
    component: ToppingsList,
  },
  {
    path: '/customization/combos/:id',
    layout: DefaultLayout,
    component: CoffeeList,
  },
];
