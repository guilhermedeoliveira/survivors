import * as types from './types';

const initialState = {
  loadingReports: false,
  hasFetchedReports: false,
  reports: {}
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case types.GET_REPORTS:
        return {
          ...state,
          loadingReports: true,
          hasFetchedReports: false,
        };
      case types.GET_REPORTS_SUCCESS:
        return {
          ...state,
          loadingReports: false,
          hasFetchedReports: true,
          reports: action.payload
        };
      case types.GET_REPORTS_FAILED:
        return {
          ...state,
          loadingReports: false,
          hasFetchedReports: false,
        };
      default: return state;
    }
  }