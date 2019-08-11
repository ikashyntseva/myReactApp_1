import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import { getPhotos } from '../actions/PageActions'
import { handleLogin } from '../actions/UserActions'
import { handleLogout } from '../actions/UserActions'

class App extends Component {
  renderPageTemplate = () => {
    const { user, page, getPhotosAction } = this.props

    if (user.name) {
      return (
        <Page
          photos={page.photos}
          year={page.year}
          isFetching={page.isFetching}
          error={page.error}
          getPhotos={getPhotosAction}
        />
      )
    }
  }
  render() {
    // вытащили handleLoginAction из this.props
    const { user, handleLoginAction, handleLogoutAction } = this.props
    return (
      <React.Fragment>
        <header className="page-title">
          <h1>VK Gallery</h1>
          <User
            name={user.name}
            avatar={user.avatar}
            isFetching={user.isFetching}
            error={user.error}
            handleLogin={handleLoginAction}
            handleLogout={handleLogoutAction}
          />
        </header>

        {this.renderPageTemplate()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: year => dispatch(getPhotos(year)),
    handleLoginAction: () => dispatch(handleLogin()),
    handleLogoutAction: () => dispatch(handleLogout()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
