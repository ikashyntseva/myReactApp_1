import React, { Component } from "react";
import { Article } from "../components/Article";
import PropTypes from "prop-types";

export class Page extends Component {
  onArticleLinkClick = e => {
    const id = e.currentTarget.dataset.itemId;
    this.props.getArticle(id);
  };

  renderTemplate = () => {
    const { article, isFetching, error } = this.props;
    if (error) {
      return (
        <p className="error">Failed to get article... Please try again later</p>
      );
    }

    if (isFetching) {
      return <p>Loading...</p>;
    } else if (article) {
      return <Article article={article} />;
    }
  };
  renderLinks = () => {
    const { ids } = this.props;

    return ids.map((id, index) => {
      return (
        <li key={index}>
          <a
            className="link"
            data-item-id={id}
            onClick={this.onArticleLinkClick}
          >
            Article {index + 1}
          </a>
        </li>
      );
    });
  };
  render() {
    return (
      <div className="page">
        <ul className="articles-list">{this.renderLinks()}</ul>
        {this.renderTemplate()}
      </div>
    );
  }
}

Page.propTypes = {
  ids: PropTypes.array.isRequired,
  getArticle: PropTypes.func.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired
};
