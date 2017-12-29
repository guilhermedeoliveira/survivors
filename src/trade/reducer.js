import * as types from './types';

const initialState = {
  loadingGetItems: false,
  items: []
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case types.GET_ITEMS:
        return {
          ...state,
          loadingGetItems: true
        };
      case types.GET_ITEMS_SUCCESS:
        return {
          ...state,
          loadingGetItems: false,
          survivors: action.payload
        };
      default: return state;
    }
  }