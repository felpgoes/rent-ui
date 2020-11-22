import { combineReducers } from 'redux';

import auth from './auth';
import places from './places';
import users from './users';

export default combineReducers({
  auth,
  places,
  users,
});
