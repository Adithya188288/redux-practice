import { combineReducers } from "redux"
import logReducer from "../Reducers/logReducer"

export default combineReducers({
  log: logReducer
})
