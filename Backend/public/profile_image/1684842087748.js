import {
  ITEM_RELEASE_CREATE,
  ITEM_RELEASE_UPDATE,
  ITEM_RELEASE_DELETE,
  ITEM_RELEASE_LIST,
  ITEM_RELEASE_DETAILS,
} from '../Constants/itemRelease.constant';
import * as api from '../../Common/Services/common.services';

//===>> Create ItemRelease
export const createItemRelease = (body) => async (dispatch) => {
  try {
    dispatch({
      type: ITEM_RELEASE_CREATE.REQUEST,
    });
    const { message } = await api.post('/orderreleased', body);
    dispatch({
      type: ITEM_RELEASE_CREATE.SUCCESS,
      payload: message,
    });
  } catch (error) {
    dispatch({
      type: ITEM_RELEASE_CREATE.FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//===<<

//===>> List ItemRelease
export const listItemRelease = (query) => async (dispatch) => {
  try {
    dispatch({
      type: ITEM_RELEASE_LIST.REQUEST,
    });
    const { data } = await api.get('/orderreleased' + query);
    // console.log(data);
    dispatch({
      type: ITEM_RELEASE_LIST.SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ITEM_RELEASE_LIST.FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//===<<

//===>> Details ItemRelease
export const detailsItemRelease = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ITEM_RELEASE_DETAILS.REQUEST,
    });
    const { data } = await api.get('/orderreleased/' + id);
    dispatch({
      type: ITEM_RELEASE_DETAILS.SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ITEM_RELEASE_DETAILS.FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//===<<

//===>> Update ItemRelease
export const updateItemRelease = (id, body) => async (dispatch) => {
  try {
    dispatch({
      type: ITEM_RELEASE_UPDATE.REQUEST,
    });
    const { message } = await api.put('/orderreleased/' + id, body);
    dispatch({
      type: ITEM_RELEASE_UPDATE.SUCCESS,
      payload: message,
    });
  } catch (error) {
    dispatch({
      type: ITEM_RELEASE_UPDATE.FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//===<<

//===>> Delete ItemRelease
export const removeItemReleases = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ITEM_RELEASE_DELETE.REQUEST,
    });
    const { message } = await api.remove('/orderreleased/' + id);
    // console.log(message);
    dispatch({
      type: ITEM_RELEASE_DELETE.SUCCESS,
      payload: message,
    });
  } catch (error) {
    dispatch({
      type: ITEM_RELEASE_DELETE.FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//===<<
