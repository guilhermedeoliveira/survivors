import api from '../services/api';
import * as types from './types';

export const getReports = () => async (dispatch) => {
  dispatch({ type: types.GET_REPORTS });
  
  const res = await api.getReports();
  dispatch({ type: types.GET_REPORTS_SUCCESS, payload: res });
};
  