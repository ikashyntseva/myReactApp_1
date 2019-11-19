import React from "react";
import PropTypes from "prop-types";
import { getArticleDate } from "../util/helper";

export const Article = props => {
  //used functional component as this component doesn't have state

  function renderArticleBody(body) {
    return { __html: body.join("") };
  }

  function renderArticle() {
    const { article } = props;
    const { heading, mainImage, author, date, body } = article;
    const imageSrc = `https://my12.digitalexperience.ibm.com/${mainImage.url}`;

    return (
      <>
        <header className="article-header">
          <h2>{heading}</h2>
        </header>
        <main className="article-main">
          <img
            className="article-image"
            src={imageSrc}
            alt={mainImage.asset.altText}
          />
          {body && (
            <section
              dangerouslySetInnerHTML={renderArticleBody(body)}
              className="article-text"
            />
          )}
        </main>
        <footer className="article-footer">
          <section className="article-details">
            <p className="article-author">{author}</p>
            <p className="article-date">{getArticleDate(date)}</p>
          </section>
        </footer>
      </>
    );
  }

  return <article>{renderArticle()}</article>;
};

Article.propTypes = {
  article: PropTypes.object.isRequired
};
