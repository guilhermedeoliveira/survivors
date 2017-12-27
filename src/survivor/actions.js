import api from '../services/api';
import * as types from './types';

export const submitSurvivor = survivor => async (dispatch) => {
  dispatch({ type: types.SUBMIT_SURVIVOR, payload: survivor });
    
  const res = await api.submitSurvivor(survivor);
  dispatch({ type: types.SUBMIT_SURVIVOR_SUCCESS, payload: res });
};

export const getSurvivors = () => async (dispatch) => {
  dispatch({ type: types.GET_SURVIVORS });
  
  const res = await api.getSurvivors();
  dispatch({ type: types.GET_SURVIVORS_SUCCESS, payload: res });
};