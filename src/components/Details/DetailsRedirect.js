import React from "react";
import MyContext from "../../context/Context";
import DetailsTemplate from "../../templates/DetailsTemplate";
import { Redirect } from "react-router-dom";

class DetailsRedirect extends React.Component {
  static contextType = MyContext;

  state = {
    country: {},
    currencies: [],
    languages: [],
    borders: [],
    redirect: false,
    redirectName: null,
    codes: [],
  };

  setCurrentCountry = (n, c) => {
    return c.filter((item) => item.name === n);
  };

  componentDidMount() {
    const country = this.context.context;
    const { name } = this.props.match.params;

    if (
      localStorage.getItem("codes") &&
      localStorage.getItem("codes").length > 0
    ) {
      const codesFromStorage = JSON.parse(localStorage.getItem("codes"));
      this.setState({ codes: codesFromStorage });
    } else {
      localStorage.setItem("codes", JSON.stringify(this.context.codes));
    }

    let currentCountry = this.setCurrentCountry(name, country);

    if (currentCountry[0]) {
      this.setState({
        country: currentCountry[0],
        currencies: currentCountry[0].currencies,
        languages: currentCountry[0].languages,
        borders: currentCountry[0].borders,
      });
    } else {
      fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
        .then((res) => res.json())
        .then((data) =>
          this.setState({
            country: data[0],
            currencies: data[0].currencies,
            languages: data[0].languages,
            borders: data[0].borders,
          }),
        );
    }
  }

  render() {
    const { codes } = this.state;

    const currentCodes = (item) => {
      const names = codes.filter((code) => code.code === item);
      return names[0].name;
    };

    const handleClick = (item) => {
      const obj = codes.filter((code) => code.code === item);
      const name = obj[0].name;
      this.setState({
        redirect: true,
        redirectName: name,
      });
    };

    if (this.state.redirect) {
      return <Redirect to={`/countries/${this.state.redirectName}`} />;
    }

    return (
      <div>
        <DetailsTemplate
          state={this.state}
          handleClick={handleClick}
          currentCodes={currentCodes}
        />
      </div>
    );
  }
}

export default DetailsRedirect;
