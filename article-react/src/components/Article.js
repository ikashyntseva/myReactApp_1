import React from "react";
import { getArticleDate } from "../util/helper";

const imageSrcRoot = `https://my12.digitalexperience.ibm.com/`;

function renderArticleBody(body) {
  return { __html: body.join("") };
}

export const Article = ({ article }) => {
  //used functional component as this component doesn't have state

  if (!article) {
    return null;
  }

  const {
    heading,
    author,
    date,
    body,
    mainImage: { asset: altText, url: imageUrl }
  } = article;

  return (
    <article>
      <header className="article-header">
        <h2>{heading}</h2>
      </header>
      <main className="article-main">
        <img
          className="article-image"
          src={`${imageSrcRoot}${imageUrl}`}
          alt={altText}
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
    </article>
  );
};
