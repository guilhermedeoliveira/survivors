import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import survivorReducer from '../survivor/reducers';


const rootReducer = combineReducers({
  form: formReducer,
  survivorState: survivorReducer
});

export default rootReducer;