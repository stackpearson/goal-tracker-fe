import {combineReducers} from 'redux';
import {goalReducer} from './goalReducer';
import {taskReducer} from './taskReducer';

export const rootReducer = combineReducers({
    goalReducer,
    taskReducer
});