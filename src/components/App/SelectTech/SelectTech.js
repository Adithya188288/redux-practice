import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getTechs } from "../../actions/techActions"

function SelectTech({ tech, setTech, techs, getTechs }) {
  useEffect(() => {
    getTechs()
    //eslint-disable-next-line
  }, [])

  return (
    <select
      name="tech"
      value={tech}
      className="browser-default"
      onChange={e => setTech(e.target.value)}
    >
      <option value="" disabled>
        Select Technician
      </option>
      {/* <option value="Sara"> Sara</option>
              <option value="Cobra Man"> Cobra man</option>
              <option value="Jennifer"> Jeniffer</option> */}
      {techs.techs != null &&
        techs.techs.map(techAva => (
          <option
            key={techAva.id}
            value={`${techAva.firstName} ${techAva.lastName}`}
          >{`${techAva.firstName} ${techAva.lastName}`}</option>
        ))}
    </select>
  )
}

const mapStateToProps = state => {
  return {
    techs: state.tech
  }
}

export default connect(
  mapStateToProps,
  { getTechs }
)(SelectTech)
