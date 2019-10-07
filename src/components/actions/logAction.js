import store from "../Store/store"
import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
  CLEAR_LOGS
} from "../actions/actionTypes"

export const getLogs = () => async dispatch => {
  try {
    setLoading()

    const data = await fetch("http://localhost:5000/logs")
    const jsonData = await data.json()

    dispatch({
      type: GET_LOGS,
      payload: jsonData
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

export const searchLogs = text => {
  let currentLogsState = store.getState().log.logs

  currentLogsState = currentLogsState.filter(log =>
    log.message.toLowerCase().includes(text.toLowerCase())
  )

  return {
    type: SEARCH_LOGS,
    payload: currentLogsState
  }
}

export const clearLogs = () => {
  return {
    type: CLEAR_LOGS
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
