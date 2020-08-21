import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import styled from 'styled-components';

class FilmPoster extends Component {

  state = {
    posters: [],
    search: '',
    error: "False"
  }

  searchFilm = event => {
    event.preventDefault();

    axios.get(`https://www.omdbapi.com/?apikey=7d40e9d8&t=${this.state.search}`)
      .then(res => {
        this.setState({
          posters: res.data
        })
      })
      .catch(error => {
        this.setState({
          error: "True"
        })
      });
  }

  handleSearch = event => {
    this.setState({
      search: event.target.value
    })
  }

  render() {

    let unfound = 'Unable to find Film. Try again =)'

    if(this.state.posters.Response === "False") {
      return (
        <div className="App">
          <h1>Cinema Hunter</h1>
          <form action="" onSubmit={this.searchFilm}>
            <input type="text" onChange={this.handleSearch} placeholder="Film Name"/>
            <button type="submit">Submit</button>
          </form>
          <p>{unfound}</p>
        </div>
      )
    }

    const info = this.state.posters;

    const awards = info.Awards;
    const cast = info.Actors;
    const date = info.Year;
    const director = info.Director;
    const genre = info.Genre;
    const plot = info.Plot;
    const poster = info.Poster;
    const rated = info.Rated;
    const runtime = info.Runtime;
    const score = info.imdbRating;
    const title = info.Title;

    return (
      <div className="App">
        <h1>Cinema Hunter</h1>
        <form action="" onSubmit={this.searchFilm}>
          <input type="text" onChange={this.handleSearch} placeholder="Film Name"/>
          <button type="submit">Submit</button>
        </form>
        <div>
          <h2>{title}</h2>
          <h2>{score}</h2>
          <img src={poster} alt=""/>
          <h3>{director}</h3>
          <h3>{genre}</h3>
          <h3>{cast}</h3>
          <h3>{rated}</h3>
          <h3>{awards}</h3>
          <h3>{date}</h3>
          <h3>{runtime}</h3>
          <p>{plot}</p>
        </div>
      </div>
    )
  }
}

export default FilmPoster;
