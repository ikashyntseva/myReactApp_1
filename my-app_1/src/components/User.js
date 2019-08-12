import React from 'react'
import PropTypes from 'prop-types'

export class User extends React.Component {
  renderTemplate = () => {
    const {
      name,
      avatar,
      error,
      isFetching,
      handleLogin,
      handleLogout,
    } = this.props

    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>
    }

    if (isFetching) {
      return <p>Загружаю...</p>
    }

    if (name) {
      return (
        <React.Fragment>
          <p>Hi, {name}!</p>
          <img className="avatar" src={avatar} alt="Avatar" />
          <button className="btn btn-sign-out" onClick={handleLogout}>
            Sign Out
          </button>
        </React.Fragment>
      )
    } else {
      return (
        <button className="btn" onClick={handleLogin}>
          Sign In
        </button>
      )
    }
  }
  render() {
    const userStatusClass = this.props.name ? 'ib user logged-in' : 'ib user'
    return <div className={userStatusClass}>{this.renderTemplate()}</div>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
}
