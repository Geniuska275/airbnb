import { sessionReducer } from "redux-react-session";
import { combineReducers } from "redux";


const rootReducer=combineReducers({
    session:sessionReducer
})

export default rootReducer