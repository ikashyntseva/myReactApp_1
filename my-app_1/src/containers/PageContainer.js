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
    const { page, getPhotos } = this.props
    const { photos, error, isFetching } = page
    return (
      <Page
        years={this.years}
        photos={photos}
        error={error}
        isFetching={isFetching}
        getPhotos={getPhotos}
      />
    )
  }
}

const mapStoreToProps = store => {
  return {
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: year => dispatch(getPhotos(year)),
  }
}

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(PageContainer)
