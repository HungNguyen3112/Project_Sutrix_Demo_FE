import { combineReducers } from 'redux';
import { loginReducer } from './login';
import { addStaffReducers } from './staffAdd';
import { filterStaffReducer } from './staffFilter';
import { historyWorkReducer } from './staffHistory';

export const rootReducers = combineReducers({
  login: loginReducer,
  addStaff: addStaffReducers,
  filterStaff: filterStaffReducer,
  historyWork: historyWorkReducer
});
