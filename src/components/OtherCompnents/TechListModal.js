import React, { useEffect, useState } from "react"
import TechItem from "./TechItem"

const TechListModal = () => {
  //fucntional state for logs
  const [techs, setTechs] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(() => {
    getTechs()
  }, [])

  const getTechs = async () => {
    setloading(true)

    const data = await fetch("http://localhost:5000/techs")
    const response = await data.json()
    setTechs(response)

    setloading(false)
  }

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  )
}

export default TechListModal
