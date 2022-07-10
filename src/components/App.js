import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import Search from "./Search";
import React from "react";
import buscar from "../services/buscar";

class App extends React.Component {
  state = {
    documentos: [],
    query: "",
    redirect: false,
    error: false,
  };

  onSearchSubmit = async (query) => {
    const response = await buscar
      .get(query)
      .then(this.setState({ query: query }), this.setState({ redirect: true }))
      .catch((err) =>
        this.setState({ error: true, redirect: true, query: query })
      );
    this.setState({ documentos: response.data });
  };

  shouldComponentUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query
      // ||
      // prevState.redirect !== this.state.redirect
    ) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              this.state.redirect ? (
                <Search
                  onSearchSubmit={this.onSearchSubmit}
                  documentos={this.state.documentos}
                  query={this.state.query}
                  errorFlag={this.state.error}
                />
              ) : (
                <Hero onSearchSubmit={this.onSearchSubmit} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
