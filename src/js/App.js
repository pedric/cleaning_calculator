import React from "react";
import Example from "./components/Example";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      apiResponse: "",
    };
  }

  callAPI() {
    fetch("http://localhost:9000/api/test")
      .then((res, req) => res.json())
      .then((res, req) => this.setState({ apiResponse: res }))
      .catch("App failed to load from api");
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    console.log(this.state.apiResponse);

    return (
      <div>
        <h1>Base component</h1>
        <Example data={this.state.apiResponse} />
      </div>
    );
  }
}

export default App;
