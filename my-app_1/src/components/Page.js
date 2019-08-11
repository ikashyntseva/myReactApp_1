import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
  onYearBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.setYear(year)
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
        <h3>{year} год</h3>
        <p>У тебя {photos.length} фото.</p>
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired, // добавили новое свойство в propTypes
}