import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { deleteLogs, setCurrent } from "../actions/logAction"

function SingleLog({ log, deleteLogs, setCurrent }) {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
          onClick={() => setCurrent(log)}
        >{`
        ${log.message} - ${log.id} - ${log.tech} - ${log.date}`}</a>
        <a
          href="#!"
          onClick={() => {
            deleteLogs(log.id)
          }}
          className="secondary-content"
        >
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  )
}

SingleLog.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLogs: PropTypes.func.isRequired,
  setCurrent: PropTypes.func
}

export default connect(
  null,
  { deleteLogs, setCurrent }
)(SingleLog)
