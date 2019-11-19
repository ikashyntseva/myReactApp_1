export const GET_ARTICLE_REQUEST = "GET_ARTICLE_REQUEST";
export const GET_ARTICLE_SUCCESS = "GET_ARTICLE_SUCCESS";
export const GET_ARTICLE_FAIL = "GET_ARTICLE_FAIL";

let cached = {};

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

async function getArticleDetails(id, dispatch) {
  try {
    const itemUrl = `https://my12.digitalexperience.ibm.com/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1/content/${id}`;
    const fetchDetails = await fetch(itemUrl);

    if (fetchDetails.ok) {
      const json = await fetchDetails.json();
      const article = makeArticle(json);

      dispatch({
        type: GET_ARTICLE_SUCCESS,
        payload: article
      });
    } else {
      dispatch({
        type: GET_ARTICLE_FAIL,
        error: true,
        payload: new Error(
          `Failed to fetch the article. Error ${fetchDetails.status}`
        )
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ARTICLE_FAIL,
      error: true,
      payload: new Error(err)
    });
  }
}

export function getArticle(id) {
  return dispatch => {
    dispatch({
      type: GET_ARTICLE_REQUEST,
      payload: id
    });

    if (cached[id]) {
      const article = cached[id];

      dispatch({
        type: GET_ARTICLE_SUCCESS,
        payload: article
      });
    } else {
      getArticleDetails(id, dispatch);
    }
  };
}
