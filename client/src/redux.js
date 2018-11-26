import { combineReducers } from 'redux';
import domainReducer from './domain/domain.reducer';

export default combineReducers({
  domain: domainReducer
});
