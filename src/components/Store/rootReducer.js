import { combineReducers } from "redux"
import logReducer from "../Reducers/logReducer"
import techReducer from "../Reducers/techReducer"

export default combineReducers({
  log: logReducer,
  tech: techReducer
})
