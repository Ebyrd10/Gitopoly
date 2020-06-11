import React, { Component } from 'react';
import API from './API';
import './style.css'

export class PlayerIcon extends Component {
  state = {
    search: '',
    breeds: [],
    results: [],
  };
  componentDidMount = () => {
    API.getBaseBreedsList().then((res) =>
      this.setState({ breeds: res.data.message })
    );
  };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getDogsOfBreed(this.state.search).then((res) => {
      this.setState({ results: res.data.message });
    });
  };

  render() {
    return (
      <div id="iconSearchContainer">
        <input
          onChange={this.handleInputChange}
          value={this.state.search}
          name="search"
          list="breeds"
          type="text"
          className=""
          placeholder="Icon"
        />

        <datalist id="breeds">
          {this.state.breeds.map((breed) => (
            <option value={breed} key={breed} />
          ))}
        </datalist>
        <button
          type="submit"
          onClick={this.handleFormSubmit}
          // className="bten btn-success"
        >
          {/* Submit */}
        </button>
          {this.state.results.slice(0, 1).map((result) => (
            <div key={result}>
              <img alt="dog" src={result} id="picture"/>
            </div>
          ))}
      </div>
    );
  }
}

export default PlayerIcon;
