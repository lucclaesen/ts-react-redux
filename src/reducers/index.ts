import { combineReducers } from "redux";
import todosReducer from './todos'
import visibilityFilterReducer from './visibilityFilter';
import {AppState} from "../state";

const combinedReducer = combineReducers<AppState>({todos: todosReducer, visibilityFilter: visibilityFilterReducer});

export default combinedReducer;