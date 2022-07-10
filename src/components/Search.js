import "../css/style.css";
import SearchbarFlex from "./SearchbarDark";
import React from "react";
import ListaDocumentos from "./ListaDocumentos";

class Search extends React.Component {
  state = { background: Math.ceil(Math.random() * 5) };

  render() {
    return (
      <div className={`search search__${this.state.background}`}>
        <div className="search__bar">
          <SearchbarFlex
            onSubmit={this.props.onSearchSubmit}
            query={this.props.query}
          />
        </div>

        <div className="search__lista">
          <ListaDocumentos
            documentos={this.props.documentos}
            errorF={this.props.errorFlag}
          />
        </div>
      </div>
    );
  }
}

export default Search;
