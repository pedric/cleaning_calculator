import React from "react";
import Title from "./components/Title";
import Input from "./components/Input";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "",
      area: 0,
      areaPrice: 0,
      extrasPrice: 0,
    };
    this.calculateAreaPrice = this.calculateAreaPrice.bind(this);
    this.calculateExtrasPrice = this.calculateExtrasPrice.bind(this);
  }

  callAPI = (city) => {
    fetch("http://localhost:9000/api/cleaning_service/" + city)
      .then((res, req) => res.json())
      .then((res, req) => this.setState({ city: res }))
      .catch("App failed to load from api");
  };

  componentDidMount() {
    this.callAPI("stockholm"); // Set Stockholm to default city
  }

  changeCity = (e) => {
    this.setState({ city: "", area: 0, areaPrice: 0, extrasPrice: 0 });
    this.callAPI(e.target.value);
  };

  calculateAreaPrice = (e) => {
    let areaPrice =
      parseInt(e.target.value) * this.state.city.square_meter_price;
    let validPrice = areaPrice > 0 ? areaPrice : 0;
    let validArea =
      parseInt(e.target.value) > 0 ? parseInt(e.target.value) : "";
    this.setState({ areaPrice: validPrice });
    this.setState({ area: validArea });
  };

  calculateExtrasPrice = (e) => {
    let extrasPrice = 0;
    const extras = document.querySelectorAll('[type = "checkbox"]');
    for (const i of extras) {
      // console.log(i.value);
      // console.log(i.checked);
      extrasPrice += i.checked ? parseInt(i.value) : 0;
    }
    this.setState({ extrasPrice: extrasPrice });
    console.log("EXTRA: ", extrasPrice);
  };

  render() {
    const extra_option_inputs = this.state.city.extra_options;

    let inputs = [];

    if (extra_option_inputs) {
      inputs = extra_option_inputs.map((option) => (
        <Input
          key={option.name}
          type={"checkbox"}
          name={option.name}
          value={option.price}
          handler={this.calculateExtrasPrice}
        />
      ));
    }

    return (
      <div>
        <h1>Städoffert</h1>
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
            <Input
              type={"number"}
              name={"kvm"}
              value={this.state.area}
              handler={this.calculateAreaPrice}
            />
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
            <h4 className={"result-feedback"}>
              Total kostnad {this.state.areaPrice + this.state.extrasPrice} kr
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
