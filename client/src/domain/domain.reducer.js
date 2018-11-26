import { createActionTypeSet, makeActionCreators, STATUS } from '../helpers/reducer.helper';

export const actionTypes = {
  DISKS: createActionTypeSet('LISTS')
};

export const initialState = {
  disks: [],
  error: null,
  status: STATUS.NOT_REQUESTED
};

function domainReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.DISKS.REQUESTED:
      return { ...state, status: STATUS.REQUESTED };

    case actionTypes.DISKS.FULFILLED:
      return { ...state, disks: action.payload, error: null, status: STATUS.FULFILLED };

    case actionTypes.DISKS.FAILED:
      return { ...state, error: action.payload, status: STATUS.FAILED };

    default:
      return state;
  }
}

export const actionCreators = {
  DISKS: makeActionCreators(actionTypes.DISKS)
};

export default domainReducer;
