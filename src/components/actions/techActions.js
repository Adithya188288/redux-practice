import {
  GET_TECHS,
  DELETE_TECH,
  TECHS_ERROR,
  ADD_TECH,
  SET_LOADING
} from "../actions/actionTypes"

export const getTechs = () => async dispatch => {
  try {
    setLoading()

    const req = await fetch("http://localhost:5000/techs")
    const data = await req.json()

    dispatch({
      type: GET_TECHS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error
    })
  }
}
export const deleteTech = id => dispatch => {
  try {
    setLoading()

    fetch(`http://localhost:5000/techs/${id}`, {
      method: "DELETE"
    })

    dispatch({
      type: DELETE_TECH,
      payload: id
    })
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error
    })
  }
}

export const addTech = tech => async dispatch => {
  try {
    setLoading()

    const req = await fetch("http://localhost:5000/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await req.json()

    dispatch({
      type: ADD_TECH,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error
    })
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
