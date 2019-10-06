import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG
} from "../actions/actionTypes"

export const getLogs = () => async dispatch => {
  try {
    setLoading()

    const data = await fetch("http://localhost:5000/logs")
    const jsonDate = await data.json()

    dispatch({
      type: GET_LOGS,
      payload: jsonDate
    })
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    })
  }
}

export const addLog = log => async dispatch => {
  try {
    setLoading()

    const data = await fetch("http://localhost:5000/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const response = await data.json()

    dispatch({
      type: ADD_LOG,
      payload: response
    })
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    })
  }
}

export const deleteLogs = id => async dispatch => {
  try {
    setLoading()

    fetch(`http://localhost:5000/logs/${id}`, {
      method: "DELETE"
    })

    dispatch({
      type: DELETE_LOG,
      payload: id
    })
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    })
  }
}

export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  }
}

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  }
}

export const updateLog = log => async dispatch => {
  try {
    setLoading()
    const requestData = await fetch(`http://localhost:5000/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await requestData.json()
    dispatch({
      type: UPDATE_LOG,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    })
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
