import "../css/style.css";
import React from "react";

class SearchbarFlex extends React.Component {
  state = { query: this.props.query };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <div className="searchbardark">
        <form className="searchbardark__container" onSubmit={this.onFormSubmit}>
          <input
            className="searchbardark__container--query"
            type="text"
            onChange={(e) => this.setState({ query: e.target.value })}
            value={this.state.query}
            placeholder="Search..."
          />
          <img
            className="searchbardark__container--mg"
            src={require("../resources/mg.png")}
            alt="Magnifiying Glass"
          ></img>
        </form>

        <hr className="searchbardark__line" />
      </div>
    );
  }
}

export default SearchbarFlex;
