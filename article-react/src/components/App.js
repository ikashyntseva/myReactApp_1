import React, { Component } from "react";
import PageContainer from "../containers/PageContainer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="page-title">
          <h1>Articles</h1>
        </header>
        <PageContainer />
      </React.Fragment>
    );
  }
}

export default App;
