import React from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { handleLogin } from '../actions/UserActions'
import { handleLogout } from '../actions/UserActions'

class UserContainer extends React.Component {
  render() {
    const { user, handleLogin, handleLogout } = this.props
    return (
      <User
        name={user.name}
        avatar={user.avatar}
        error={user.error}
        isFetching={user.isFetching}
        handleLogin={handleLogin}
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
    handleLogin: () => dispatch(handleLogin()),
    handleLogout: () => dispatch(handleLogout()),
  }
}

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(UserContainer)
