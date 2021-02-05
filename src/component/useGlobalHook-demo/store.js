import React from 'react';
import globalHook from 'use-global-hook';

import * as actions from './actions';

// 初始化数据
const initialState = {
  counter: 0,
};

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
