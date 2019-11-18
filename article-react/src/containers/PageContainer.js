import React from "react";
import { connect } from "react-redux";
import { Page } from "../components/Page";
import { getArticle } from "../actions/PageActions";

class PageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.ids = [
      "424d587d-0990-4c07-9c1e-14445e4817f5",
      "fa9519d5-0363-4b8d-8e1f-627d802c08a8",
      "567g674a-0867-7h6q-0y2c-098v456s09b4" //just a fake item id
    ];
  }
  render() {
    const { page, getArticle } = this.props;
    const { article, error, isFetching } = page;
    return (
      <Page
        ids={this.ids}
        article={article}
        error={error}
        isFetching={isFetching}
        getArticle={getArticle}
      />
    );
  }
}

const mapStoreToProps = store => {
  return {
    page: store.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getArticle: id => dispatch(getArticle(id))
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(PageContainer);
