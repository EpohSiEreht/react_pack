import axios from 'axios';
import * as types from '@/constants/action_types/main';
import { mainData } from '@/constants/endpoints';

function fetchMainDataSuccess(data) {
  return {
    type: types.FETCH_MAIN_SUCCESS,
    payload: data,
    fetched: true,
    fetching: false,
  };
}

function fetchMainDataError(error) {
  return {
    type: types.FETCH_MAIN_ERROR,
    fetching: false,
    error: true,
    errorCode: error.response.status,
  };
}

const fetchMainData = () => (dispatch) => {
  dispatch({ type: types.FETCH_MAIN_DATA, fetching: true });
  return axios
    .get(mainData)
    .then(() => {
      dispatch(fetchMainDataSuccess(mainData));
    })
    .catch((err) => {
      dispatch(fetchMainDataError(err));
    });
};

export default fetchMainData;
