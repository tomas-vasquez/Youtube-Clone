import React, { Component } from "react";
import Icons from "../Common/Icons";

class SearchBar extends Component {
  state = {
    searchQuery: "",
  };

  onInputChange = (searchQuery) => {
    console.log(searchQuery);
    this.setState({
      searchQuery,
    });
  };

  handleSearch = () => {
    const searchQuery = this.state.searchQuery;
    if (searchQuery.length > 0) {
      this.props.searchVideo(searchQuery);
    }
  };
  render() {
    const { searchQuery } = this.state;
    return (
      <div className="search-container">
        <h2 className="search-title">
          <Icons icon="youtube" className="mr-2" />
          <p className="d-none d-lg-inline">YoutubeClone</p>
        </h2>
        <input
          className="search-input"
          placeholder="Search"
          value={searchQuery}
          onChange={(event) => this.onInputChange(event.target.value)}
        />
        <button onClick={this.handleSearch} className="ghost-btn">
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;
