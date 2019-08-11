import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
  onYearBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year)
  }

  renderTemplate = () => {
    const { photos, isFetching, error } = this.props
    if (error) {
      return <p className="error">Во время загрузки фото произошла ошибка</p>
    }

    if (isFetching) {
      return <p>Загрузка...</p>
    } else {
      return photos.map(entry => (
        <div key={entry.id} className="photo">
          <p>
            <img src={entry.sizes[3].url} alt="" />
          </p>
          <p>{entry.likes.count} ❤</p>
        </div>
      ))
    }
  }
  render() {
    const { year, photos } = this.props
    return (
      <div className="ib page">
        <p>
          <button className="btn" onClick={this.onYearBtnClick}>
            2019
          </button>
          <button className="btn" onClick={this.onYearBtnClick}>
            2018
          </button>
          <button className="btn" onClick={this.onYearBtnClick}>
            2017
          </button>
          <button className="btn" onClick={this.onYearBtnClick}>
            2016
          </button>
          <button className="btn" onClick={this.onYearBtnClick}>
            2015
          </button>
          <button className="btn" onClick={this.onYearBtnClick}>
            2014
          </button>
        </p>
        <h3>
          {year} год [{photos.length}]
        </h3>
        {this.renderTemplate()}
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
}
