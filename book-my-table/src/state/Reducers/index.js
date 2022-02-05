import { combineReducers } from "redux";
import tableReducer from './Fields-Reducer';

const reducer = combineReducers({
    table : tableReducer
})

export default reducer;