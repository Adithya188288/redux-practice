import {
  GET_TECHS,
  DELETE_TECH,
  TECHS_ERROR,
  ADD_TECH,
  SET_LOADING
} from "../actions/actionTypes"

const initialState = {
  techs: null,
  error: null,
  loading: false
}

const techReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false
      }
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false
      }
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== action.payload),
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default techReducer
