import React from 'react'
import { connect } from 'react-redux'
import { Page } from '../components/Page'
import { getPhotos } from '../actions/PageActions'
import { getLastYears } from '../util/date'

const LAST_5_YEARS = 5

class PageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.years = getLastYears(LAST_5_YEARS)
  }
  render() {
    const { page, user, getPhotos } = this.props
    const { year, photos, error, isFetching } = page
    if (user.name) {
      return (
        <Page
          year={year}
          years={this.years}
          photos={photos}
          error={error}
          isFetching={isFetching}
          getPhotos={getPhotos}
        />
      )
    }
    return ''
  }
}

const mapStoreToProps = store => {
  return {
    page: store.page,
    user: store.user,
  }
}

const mapDispatchToProps = dispatch => {
  debugger
  return {
    getPhotos: year => dispatch(getPhotos(year)),
  }
}

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(PageContainer)
