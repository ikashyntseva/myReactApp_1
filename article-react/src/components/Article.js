import React from "react";
import PropTypes from "prop-types";
import { getArticleDate } from "../util/helper";
import { getArtcileNodes } from "../util/helper";

export const Article = props => {
  //used functional component as this component doesn't have state
  function createNode(nodes) {
    return nodes.map((node, index) => {
      let children = [node.innerText];
      const tag = node.tagName.toLowerCase();

      if (node.children.length) {
        children = createNode(Array.from(node.children));
      }

      return React.createElement(tag, { key: index }, ...children);
    });
  }

  function renderArticleNodes(body) {
    const articleNodes = getArtcileNodes(body);

    return <React.Fragment>{createNode(articleNodes)}</React.Fragment>;
  }

  function renderArticleBody(body) {
    if (body && body.length) {
      return (
        <section className="article-text">{renderArticleNodes(body)}</section>
      );
    }
  }

  function renderArticle() {
    const { article } = props;
    const { heading, mainImage, author, date, body } = article;
    const imageSrc = `https://my12.digitalexperience.ibm.com/${mainImage.url}`;

    return (
      <React.Fragment>
        <header className="article-header">
          <h2>{heading}</h2>
        </header>
        <main className="article-main">
          <img
            className="article-image"
            src={imageSrc}
            alt={mainImage.asset.altText}
          />
          {renderArticleBody(body)}
        </main>
        <footer className="article-footer">
          <section className="article-details">
            <p className="article-author">{author}</p>
            <p className="article-date">{getArticleDate(date)}</p>
          </section>
        </footer>
      </React.Fragment>
    );
  }

  return <article>{renderArticle()}</article>;
};

Article.propTypes = {
  article: PropTypes.object.isRequired
};
