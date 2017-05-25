import { combineReducers } from 'redux';
import WeaterReducer from './reducer_weather';

const rootReducer = combineReducers({
  	weather: WeaterReducer
});

export default rootReducer;
