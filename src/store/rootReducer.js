import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from '@/store/auth/reducer';
import dashboardReducer from '@/store/dashboard/reducer';
import history from '@/utils/history';

export default combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  dashboard: dashboardReducer,
});
