import React from "react"
import TechItem from "./TechItem"
// import { getTechs } from "../actions/techActions"
import { connect } from "react-redux"

const TechListModal = ({ techs }) => {
  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!techs.loading &&
            techs.techs !== null &&
            techs.techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    techs: state.tech
  }
}

export default connect(mapStateToProps)(TechListModal)
