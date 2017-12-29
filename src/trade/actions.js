import api from '../services/api';
import * as types from './types';

export const getItems = id => async (dispatch) => {
  dispatch({ type: types.GET_ITEMS });
    
  const res = await api.getItems(id);
  dispatch({ type: types.GET_ITEMS_SUCCESS, payload: res });
};