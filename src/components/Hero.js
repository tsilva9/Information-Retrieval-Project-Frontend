import "../css/style.css";
import "./Searchbar";
import Searchbar from "./Searchbar";
import React from "react";
import subir from "../services/subir";

class Hero extends React.Component {
  state = { selectedFile: null, displaySpinner: false, buttonClicked: false };

  onFileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      buttonClicked: false,
    });
  };

  onFileUpload = () => {
    const formData = new FormData();
    this.setState({ displaySpinner: true, buttonClicked: true });

    // Update the formData object
    formData.append("file", this.state.selectedFile);
    console.log(this.state.selectedFile);
    subir
      .post("/subida", formData)
      .then(() => this.setState({ displaySpinner: false }));
  };

  render() {
    return (
      <div className="hero">
        <div className="hero__upload-container">
          <label
            className={`hero__upload-container--input hero__upload-container--file-text heading-3`}
          >
            Upload File
            <input type="file" onChange={this.onFileChange} />
          </label>
          <img
            className={` ${
              this.state.selectedFile && !this.state.buttonClicked
                ? "hero__upload-container--upload--file-selected"
                : "hero__upload-container--upload"
            }`}
            src={require("../resources/upload.png")}
            alt="upload"
            onClick={this.onFileUpload}
          />
          {this.state.displaySpinner ? (
            <div className="hero__upload-container__spinner"></div>
          ) : (
            ""
          )}
        </div>

        <h1 className="hero__titulo heading-1">This is our Search Engine</h1>
        <div className="hero__searchbar">
          <Searchbar onSubmit={this.props.onSearchSubmit} />
        </div>
        <h2 className="hero__footer heading-2">DLC 2022</h2>
      </div>
    );
  }
}

export default Hero;
