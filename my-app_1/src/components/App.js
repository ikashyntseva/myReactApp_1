import React, { Component } from 'react'
import UserContainer from '../containers/UserContainer' // изменили импорт
import PageContainer from '../containers/PageContainer' // изменили импорт

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="page-title">
          <h1>VK Gallery</h1>
          <UserContainer />
        </header>
        <PageContainer />
      </React.Fragment>
    )
  }
}

export default App
