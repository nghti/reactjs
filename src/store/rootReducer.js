import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from '@/store/modules/auth/reducer';
import dashboardReducer from '@/store/modules/dashboard/reducer';
import history from '@/utils/history';

export default combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  dashboard: dashboardReducer,
});
