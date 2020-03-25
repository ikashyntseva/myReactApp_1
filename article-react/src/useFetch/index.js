import { useState, useEffect } from "react";

const itemUrl = `https://my12.digitalexperience.ibm.com/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1/content/`;

const cached = {};

function makeArticle(articleDetails) {
  const { id, elements } = articleDetails;
  const article = {
    heading: elements.heading.value || "",
    mainImage: elements.mainImage.value.leadImage,
    author: elements.author.value || "",
    date: elements.date.value || articleDetails.created || "",
    body: elements.body.values || []
  };

  cached[id] = article;

  return article;
}

const useFetch = () => {
  const [articleId, setArticleId] = useState(false);
  const [article, setArticle] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!articleId) {
      return;
    }
    setError(false);
    if (cached[articleId]) {
      setArticle(cached[articleId]);
      return;
    }
    setFetching(true);
    fetch(itemUrl + articleId)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch the article");
        }
      })
      .then(responseData => {
        setArticle(makeArticle(responseData));
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setFetching(false);
      });
  }, [articleId]);

  return [article, fetching, error, setArticleId];
};

export default useFetch;
