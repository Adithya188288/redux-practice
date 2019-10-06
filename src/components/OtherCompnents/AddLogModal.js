import React, { useState } from "react"
import M from "materialize-css/dist/js/materialize.min.js"
import { addLog } from "../actions/logAction"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const AddLogModal = props => {
  const [message, setMessage] = useState("")
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState("")

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" })
    } else {
      const data = {
        message,
        tech,
        attention,
        date: new Date()
      }

      props.addLog(data)

      M.toast({ html: ` New Log Added by ${tech}` })

      // Clear Fields
      setMessage("")
      setTech("")
      setAttention(false)
    }
  }

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
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
            <label htmlFor="message" className="active">
              Log Message
            </label>
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

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
}

const modalStyle = {
  width: "75%",
  height: "75%"
}

export default connect(
  null,
  { addLog }
)(AddLogModal)
