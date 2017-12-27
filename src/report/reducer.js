import * as types from './types';

import { getCoordsFromString } from '../services/utils';

const initialState = {
  loadingReports: false,
  reports: {}
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case types.GET_REPORTS:
        return {
          ...state,
          loadingReports: true
        };
      case types.GET_REPORTS_SUCCESS:
        return {
          ...state,
          loadingReports: false,
          reports: action.payload
        };
      case types.GET_REPORTS_FAILED:
        return {
          ...state,
          loadingReports: false
        };
      default: return state;
    }
  }