import React from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { handleLogin } from '../actions/UserActions'
import { handleLogout } from '../actions/UserActions'
import { getPhotos } from '../actions/PageActions'
import { getCurrentYear } from '../util/date'

class UserContainer extends React.Component {
  handleLogin = () => {
    const { handleLogin, getPhotos } = this.props
    const successfulCallback = () => {
      const currentYear = getCurrentYear()
      getPhotos(currentYear)
    }

    handleLogin(successfulCallback)
  }
  render() {
    const { user, handleLogout } = this.props
    return (
      <User
        name={user.name}
        avatar={user.avatar}
        error={user.error}
        isFetching={user.isFetching}
        handleLogin={this.handleLogin}
        handleLogout={handleLogout}
      />
    )
  }
}

const mapStoreToProps = store => {
  return {
    user: store.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: successfulCallback =>
      dispatch(handleLogin(successfulCallback)),
    handleLogout: () => dispatch(handleLogout()),
    getPhotos: year => dispatch(getPhotos(year)),
  }
}

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(UserContainer)
