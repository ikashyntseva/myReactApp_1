import React, { Component } from "react";
import { Article } from "../components/Article";
import PropTypes from "prop-types";
import Loader from "./Loader";

export class Page extends Component {
  onArticleLinkClick = e => {
    const id = e.currentTarget.dataset.itemId;
    this.props.getArticle(id);
  };

  renderTemplate = () => {
    const { article, isFetching, error } = this.props;
    if (error) {
      return (
        <section className="error">
          <p>{error}</p>
        </section>
      );
    }

    if (isFetching) {
      return <Loader />;
    } else if (article) {
      return <Article key={article.heading} article={article} />;
    }
  };
  renderLinks = () => {
    const { ids } = this.props;

    return ids.map((id, index) => {
      const href = `#article_${index + 1}`;
      return (
        <li key={index}>
          <a
            className="link"
            data-item-id={id}
            onClick={this.onArticleLinkClick}
            href={href}
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
