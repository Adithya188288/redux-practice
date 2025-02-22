import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { updateLog, clearCurrent } from "../actions/logAction"
import M from "materialize-css/dist/js/materialize.min.js"
import PropTypes from "prop-types"

const EditLogModal = ({ current, clearCurrent, updateLog }) => {
  const [message, setMessage] = useState("")
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState("")

  useEffect(() => {
    if (current) {
      setMessage(current.message)
      setTech(current.tech)
      setAttention(current.attention)
    }
  }, [current])

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" })
    } else {
      const updatedLog = {
        id: current.id,
        message,
        tech,
        attention,
        date: new Date()
      }

      updateLog(updatedLog)
      M.toast({ html: `Log updated by ${tech}` })
      clearCurrent()

      // Clear Fields
      setMessage("")
      setTech("")
      setAttention(false)
    }
  }

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <option value="Sara"> Sara</option>
              <option value="Cobra Man"> Cobra man</option>
              <option value="Jennifer"> Jeniffer</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  )
}

const modalStyle = {
  width: "75%",
  height: "75%"
}

EditLogModal.propTypes = {
  updateLog: PropTypes.func.isRequired,
  current: PropTypes.object,
  clearCurrent: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    current: state.log.current
  }
}

export default connect(
  mapStateToProps,
  { updateLog, clearCurrent }
)(EditLogModal)
