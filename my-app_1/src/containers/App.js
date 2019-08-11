import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import { setYear } from '../actions/PageActions'

import '../styles/App.css'

class App extends Component {
  render() {
    const { user, page, setYearAction } = this.props

    return (
      <div className="row">
        <Page photos={page.photos} year={page.year} setYear={setYearAction} />
        <User name={user.name} />
      </div>
    )
  }
}
// приклеиваем данные из store
const mapStateToProps = store => {
  console.log(store) // посмотрим, что же у нас в store?
  return {
    user: store.user,
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setYearAction: year => dispatch(setYear(year)),
  }
}

// в наш компонент App, с помощью connect(mapStateToProps)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
