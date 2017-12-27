import * as types from './types';

import { getCoordsFromString } from '../services/utils';

const initialState = {
  loadingSubmitSurvivor: false,
  loadingGetSurvivor: false,
  hasFinishedSurvivors: false,
  survivors: []
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case types.SUBMIT_SURVIVOR:
        return {
          ...state,
          loadingSubmitSurvivor: true
        };
      case types.SUBMIT_SURVIVOR_SUCCESS:
        return {
          ...state,
          loadingSubmitSurvivor: false,
          survivors: action.payload
        };
      case types.SUBMIT_SURVIVOR_FAILED:
        return {
          ...state,
          loadingGetSurvivor: false
        };
      case types.GET_SURVIVORS:
        return {
          ...state,
          loadingGetSurvivor: true,
          hasFinishedSurvivors: false,
        };
      case types.GET_SURVIVORS_SUCCESS:
        return {
          ...state,
          loadingGetSurvivor: false,
          hasFinishedSurvivors: true,
          survivors: [
            ...state.survivors,
            ...action.payload
          ]
        };
      case types.SUBMIT_SURVIVOR_FAILED:
        return {
          ...state,
          loadingGetSurvivor: false
        };
      default: return state;
    }
  }