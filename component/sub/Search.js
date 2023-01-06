import React, { Component } from 'react';

class Search extends Component {
  state = { artistQuery: '' };

  searchArtist = () => {
    this.props.search(this.state.artistQuery);
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.searchArtist();
    }
  };
  updateArtistHistory = (event) => {
    this.setState({ artistQuery: event.target.value });
  };

  render() {
    return (
      <div className="row ">
        <div className="top-content">
          <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 text-center search">
            <div className="d-flex justify-content-between">
              <div className="inputWrap">
                <input
                  type="text"
                  onChange={this.updateArtistHistory}
                  onKeyPress={this.handleKeyPress}
                  required
                />
                <label>Search Artist Name</label>
                <span className="border" />
              </div>
              <div>
                <button className="btn btn-primary" onClick={this.searchArtist}>
                  <i className="glyphicon glyphicon-search" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
