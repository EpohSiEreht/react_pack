import { combineReducers } from 'redux';
import * as types from '@/constants/action_types/main';

const stateFormat = {
  data: {},
  fetch: {
    fetching: false,
    fetched: false,
    error: null,
    errorCode: null,
  },
};

function mainData(state = stateFormat, action) {
  switch (action.type) {
    case types.FETCH_MAIN_DATA: {
      return {
        ...state,
        fetch: {
          ...state.fetch,
          fetching: action.fetching,
        },
      };
    }
    case types.FETCH_MAIN_ERROR: {
      return {
        ...state,
        fetch: {
          ...state.fetch,
          fetching: action.fetching,
          error: action.error,
          errorCode: action.errorCode,
        },
      };
    }
    case types.FETCH_MAIN_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        fetch: {
          ...state.fetch,
          fetching: action.fetching,
          fetched: action.fetched,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  mainData,
});
