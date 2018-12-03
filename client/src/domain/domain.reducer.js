import { createActionTypeSet, makeActionCreators, STATUS } from '../helpers/reducer.helper';

export const actionTypes = {
  RECORDS: createActionTypeSet('RECORDS'),
  SELECTED_RECORD: createActionTypeSet('SELECTED_RECORD'),
  ADD_RECORD: createActionTypeSet('ADD_RECORD'),
  REMOVE_RECORD: createActionTypeSet('REMOVE_RECORD'),
  UPDATE_RECORD: createActionTypeSet('UPDATE_RECORD')
};

export const initialState = {
  records: [],
  selectedRecord: null,
  error: null,
  status: STATUS.NOT_REQUESTED
};

function domainReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.RECORDS.REQUESTED:
    case actionTypes.ADD_RECORD.REQUESTED:
    case actionTypes.SELECTED_RECORD.REQUESTED:
    case actionTypes.REMOVE_RECORD.REQUESTED:
    case actionTypes.UPDATE_RECORD.REQUESTED:
      return { ...state, status: STATUS.REQUESTED };

    case actionTypes.RECORDS.FULFILLED:
      return { ...state, records: action.payload, error: null, status: STATUS.FULFILLED };

    case actionTypes.SELECTED_RECORD.FULFILLED:
      return { ...state, selectedRecord: action.payload, error: null, status: STATUS.FULFILLED };

    case actionTypes.ADD_RECORD.FULFILLED:
      return {
        ...state,
        records: [...state.records, action.payload],
        error: null,
        status: STATUS.FULFILLED
      };

    case actionTypes.REMOVE_RECORD.FULFILLED:
      return {
        ...state,
        records: state.records.filter(record => record.id !== action.payload.recordId),
        error: null,
        status: STATUS.FULFILLED
      };

    case actionTypes.UPDATE_RECORD.FULFILLED:
      return {
        ...state,
        records: state.records.map(
          record => (record.id === action.payload.id ? action.payload : record)
        ),
        error: null,
        status: STATUS.FULFILLED
      };

    case actionTypes.RECORDS.FAILED:
    case actionTypes.ADD_RECORD.FAILED:
    case actionTypes.SELECTED_RECORD.FAILED:
    case actionTypes.REMOVE_RECORD.FAILED:
    case actionTypes.UPDATE_RECORD.FAILED:
      return { ...state, error: action.payload, status: STATUS.FAILED };

    default:
      return state;
  }
}

export const actionCreators = {
  RECORDS: makeActionCreators(actionTypes.RECORDS),
  ADD_RECORD: makeActionCreators(actionTypes.ADD_RECORD),
  SELECTED_RECORD: makeActionCreators(actionTypes.SELECTED_RECORD),
  REMOVE_RECORD: makeActionCreators(actionTypes.REMOVE_RECORD),
  UPDATE_RECORD: makeActionCreators(actionTypes.UPDATE_RECORD)
};

export default domainReducer;
