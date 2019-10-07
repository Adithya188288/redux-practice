import React from "react"
import "./Search.css"
import { connect } from "react-redux"
import { searchLogs, clearLogs } from "../actions/logAction"
import PropTypes from "prop-types"

const Search = ({ searchLogs, clearLogs }) => {
  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              onChange={e =>
                e.target.value.length === 0
                  ? clearLogs()
                  : searchLogs(e.target.value)
              }
              required
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}

Search.propTypes = {
  searchLogs: PropTypes.func.isRequired
}

export default connect(
  null,
  { searchLogs, clearLogs }
)(Search)
