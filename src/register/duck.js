import api from '../services/api';

// Using ducks

// Actions Types
const SUBMIT_SURVIVOR = 'register/SUBMIT_SURVIVOR';
const SUBMIT_SURVIVOR_SUCCESS = 'register/SUBMIT_SURVIVOR_SUCCESS';
const SUBMIT_SURVIVOR_FAILED = 'register/SUBMIT_SURVIVOR_FAILED';

// Reducer
export default function reducer(state = {}, action = {}) {
    switch (action.type) {
      case SUBMIT_SURVIVOR:
        return {
          ...state,
          loadingSubmitSurvivor: true
        };
      case SUBMIT_SURVIVOR_SUCCESS:
        return {
          ...state,
          loadingSubmitSurvivor: false,
          survivor: action.payload
        };
      case SUBMIT_SURVIVOR_FAILED:
        return {
          ...state,
          loadingSubmitSurvivor: false
        };
      default: return state;
    }
  }

// Action Creators
export const submitSurvivor = survivor => (dispatch) => {
  dispatch({ type: SUBMIT_SURVIVOR, payload: survivor })
  
  api.submitSurvivor
     .then((res) => {
       dispatch({ type: SUBMIT_SURVIVOR_SUCCESS, payload: res });
     })
     .catch(() => {
       dispatch({ type: SUBMIT_SURVIVOR_FAILED, payload: 'Failed' });
     });
};