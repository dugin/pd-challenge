import axios from 'axios';
import { actionCreators } from './domain.reducer';
import * as R from 'ramda';

const baseURL = 'http://localhost:8000';

export const fetchRecords = record => async dispatch => {
  dispatch(actionCreators.RECORDS.createRequestedAction());

  try {
    const { data } = await axios(createFetchRecordsRequest(record));

    dispatch(actionCreators.RECORDS.createFulfilledAction(data));
  } catch (e) {
    const error = R.pathOr(e, ['response', 'data'], e);
    dispatch(actionCreators.RECORDS.createFailedAction(error));
  }
};
export const postRecord = record => async dispatch => {
  dispatch(actionCreators.ADD_RECORD.createRequestedAction());

  try {
    await axios(createPostRecordRequest(record));

    dispatch(actionCreators.ADD_RECORD.createFulfilledAction(record));
  } catch (e) {
    const error = R.pathOr(e, ['response', 'data'], e);
    dispatch(actionCreators.RECORDS.createFailedAction(error));
  }
};

export const fetchRecord = recordId => async dispatch => {
  dispatch(actionCreators.SELECTED_RECORD.createRequestedAction());

  try {
    const { data } = await axios(createGetRecordRequest(recordId));

    dispatch(actionCreators.SELECTED_RECORD.createFulfilledAction(data));
  } catch (e) {
    const error = R.pathOr(e, ['response', 'data'], e);
    dispatch(actionCreators.RECORDS.createFailedAction(error));
  }
};

export const deleteRecord = recordId => async dispatch => {
  dispatch(actionCreators.REMOVE_RECORD.createRequestedAction());

  try {
    await axios(createDeleteRecordRequest(recordId));

    dispatch(actionCreators.REMOVE_RECORD.createFulfilledAction(recordId));
  } catch (e) {
    const error = R.pathOr(e, ['response', 'data'], e);
    dispatch(actionCreators.RECORDS.createFailedAction(error));
  }
};

export const putRecord = record => async dispatch => {
  dispatch(actionCreators.UPDATE_RECORD.createRequestedAction());

  try {
    await axios(createPutRecordRequest(record));

    dispatch(actionCreators.UPDATE_RECORD.createFulfilledAction(record));
  } catch (e) {
    const error = R.pathOr(e, ['response', 'data'], e);
    dispatch(actionCreators.RECORDS.createFailedAction(error));
  }
};

function createPutRecordRequest(record) {
  return {
    method: 'put',
    url: `${baseURL}/record/${record.id}`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: record
  };
}

function createDeleteRecordRequest(recordId) {
  return {
    method: 'delete',
    url: `${baseURL}/record/${recordId}`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
}

function createFetchRecordsRequest(record) {
  const params = record ? { record } : {};
  return {
    method: 'get',
    url: `${baseURL}/records`,
    headers: {
      'Content-Type': 'application/json'
    },
    params
  };
}

function createGetRecordRequest(recordId) {
  return {
    method: 'get',
    url: `${baseURL}/record/${recordId}`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
}

function createPostRecordRequest(record) {
  return {
    method: 'post',
    url: `${baseURL}/record`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: record
  };
}
