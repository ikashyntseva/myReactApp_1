import React from "react";
import { Article } from "../components/Article";
import Loader from "./Loader";
import useFetch from "../useFetch";

const articlesIds = [
  "424d587d-0990-4c07-9c1e-14445e4817f5",
  "fa9519d5-0363-4b8d-8e1f-627d802c08a8",
  "567g674a-0867-7h6q-0y2c-098v456s09b4", //just a fake item id
  "03cabb48-88a4-4e30-a582-8147a18fbe1f" //without text
];

const TopLinks = ({ clickHandler }) => {
  return (
    <ul className="articles-list">
      {articlesIds.map((id, index) => {
        const href = `#article_${index + 1}`;
        return (
          <li key={index}>
            <a className="link" onClick={() => clickHandler(id)} href={href}>
              Article {index + 1}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const PageBody = ({ error, article, isFetching }) => {
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
  } else {
    return null;
  }
};

const Page = () => {
  const [article, fetching, error, setArticleId] = useFetch();
  return (
    <div className="page">
      <TopLinks clickHandler={id => setArticleId(id)} />
      <PageBody isFetching={fetching} error={error} article={article} />
    </div>
  );
};

export default Page;
