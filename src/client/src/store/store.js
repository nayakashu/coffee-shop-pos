import React from 'react';
import actions from './actions';
import globalHook from './useGlobalHook';

const initialState = {
  drippedCoffees: [],
  lattes: [],
  smoothies: [],
  activeItemCartIndex: 0,
  cart: [],
};

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
