import React, { useEffect } from "react"
import "./App.css"
import Search from "../Search/Search"
import AddBtn from "../OtherCompnents/AddBtn"
import AddLogModal from "../OtherCompnents/AddLogModal"
import AddTechModal from "../OtherCompnents/AddTechModal"
import EditLogModal from "../OtherCompnents/EditLogModal"
import TechListModal from "../OtherCompnents/TechListModal"
import LogsList from "../Logs/LogsList"
import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css/dist/js/materialize.min.js"
import { Provider } from "react-redux"
import store from "../Store/store"

const App = () => {
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <Provider store={store}>
      <div className="App">
        <Search />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <AddTechModal />
          <TechListModal />
          <EditLogModal />
          <LogsList />
        </div>
      </div>
    </Provider>
  )
}

export default App
