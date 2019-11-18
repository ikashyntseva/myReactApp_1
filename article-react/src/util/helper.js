export const getArticleDate = dateStr => {
  if (dateStr) {
    const date = new Date(dateStr).toLocaleDateString().split("/");
    const months = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December"
    };
    return `${months[date[1].replace(/^0/, "")]} ${date[0]}, ${date[2]}`;
  }

  return "";
};

export const getArtcileNodes = bodyArr => {
  if (bodyArr.length) {
    let sectionHtml = "";

    bodyArr.forEach(textChunk => {
      sectionHtml += textChunk;
    });

    let frag = document.createRange().createContextualFragment(sectionHtml);

    return Array.from(frag.children);
  }
};
