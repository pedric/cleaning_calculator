import React from "react";
import Title from "./components/Title";
import Input from "./components/Input";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "",
    };
  }

  callAPI = (city) => {
    fetch("http://localhost:9000/api/cleaning_service/" + city)
      .then((res, req) => res.json())
      .then((res, req) => this.setState({ city: res }))
      .catch("App failed to load from api");
  };

  componentDidMount() {
    this.callAPI("stockholm");
  }

  changeCity = (e) => {
    console.log(e.target.value);
    this.callAPI(e.target.value);
  };

  render() {
    // console.log(this.state.city.extra_options);

    const extra_option_inputs = this.state.city.extra_options;

    console.log(extra_option_inputs);

    let inputs = [];

    if (extra_option_inputs) {
      inputs = extra_option_inputs.map((option) => (
        <Input
          key={option.name}
          type={"checkbox"}
          name={option.name}
          value={option.price}
        />
      ));
    }

    return (
      <div>
        <h1>Offert</h1>
        <div className={"cleaning-calculator"}>
          <div className={"cleaning-calculator__section"}>
            <Title classes={"cleaning-calculator__title"} title={"Välj stad"} />
            <div
              className={
                "cleaning-calculator__input-wrap cleaning-calculator__input-wrap--select"
              }
            >
              <select onChange={this.changeCity}>
                <option value={"stockholm"}>Stockholm</option>
                <option value={"uppsala"}>Uppsala</option>
              </select>
            </div>
          </div>
          <div className={"cleaning-calculator__section"}>
            <Title
              classes={"cleaning-calculator__title"}
              title={"Antal kvadratmeter"}
            />
            <Input type={"number"} name={"kvm"} />
          </div>
          <div className={"cleaning-calculator__section"}>
            <Title
              classes={"cleaning-calculator__title"}
              title={"Möjliga Tillval för " + this.state.city.name}
            />
            {inputs}
          </div>
          <div
            className={
              "cleaning-calculator__section cleaning-calculator__section--result"
            }
          >
            <h4>Totalt</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
