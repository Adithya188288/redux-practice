import React, { useEffect } from "react"
import SingleLog from "../Logs/SingleLog"
import Spinner from "../Spinner/Spinner"
import { connect } from "react-redux"
import { getLogs, searchLogs } from "../actions/logAction"

function LogsList(props) {
  // //fucntional state for logs

  useEffect(() => {
    props.getLogs()
    // eslint-disable-next-line
  }, [])

  if (props.logsData.loading || props.logsData.logs === null) {
    return <Spinner />
  }

  const dataToLoad = props.logsData.filterLogs
    ? props.logsData.filterLogs
    : props.logsData.logs

  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header center">
          <h4>System Logs</h4>
        </li>
        {!props.logsData.loading && props.logsData.logs.length === 0 ? (
          <p>No Logs </p>
        ) : (
          dataToLoad.map(log => <SingleLog key={log.id} log={log} />)
        )}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    logsData: state.log
  }
}

export default connect(
  mapStateToProps,
  { getLogs, searchLogs }
)(LogsList)
