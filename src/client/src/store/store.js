import React from 'react';
import actions from './actions';
import globalHook from './useGlobalHook';

const initialState = {
  coffeeList: [],
  shakesList: [],
  activeItemCartIndex: 0,
  cart: [],
};

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
