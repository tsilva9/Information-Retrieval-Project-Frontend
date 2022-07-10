import "../css/style.css";
import React from "react";

class Searchbar extends React.Component {
  state = { query: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <div className="searchbar">
        <form className="searchbar__container" onSubmit={this.onFormSubmit}>
          <input
            className="searchbar__container--query"
            type="text"
            onChange={(e) => this.setState({ query: e.target.value })}
            value={this.state.query}
            placeholder="Search..."
          />
          <img
            className="searchbar__container--mg"
            src={require("../resources/mg.png")}
            alt="Magnifiying Glass"
          ></img>
        </form>

        <hr className="searchbar__line" />
      </div>
    );
  }
}

export default Searchbar;
