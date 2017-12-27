import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import survivorReducer from '../survivor/reducer';
import reportReducer from '../report/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  survivorState: survivorReducer,
  reportState: reportReducer
});

export default rootReducer;