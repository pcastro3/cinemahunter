import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';

class FilmPoster extends Component {

  state = {
    posters: [],
    search: ''
  }

  searchFilm = event => {
    event.preventDefault();

    axios.get(`https://www.omdbapi.com/?apikey=7d40e9d8&t=${this.state.search}`)
      .then(res => {
        this.setState({
          posters: res.data
        })
      });

      if(this.state.posters.Response === "False") {
        alert('Unable to find Film. Try again =)');
      }
  } 

  handleSearch = event => {
    this.setState({
      search: event.target.value
    })
  }

  render() {

    const info = this.state.posters;

    const title = info.Title;
    const poster = info.Poster;
    const plot = info.Plot;
    const score = info.imdbRating;
    const genre = info.Genre;
    const rated = info.Rated;
    const awards = info.Awards;
    const date = info.Year;
    const runtime = info.Runtime;
    const director = info.Director;

    console.log(info);

    return (
      <div className="App">
        <h1>Cinema Hunter</h1>
        <form action="" onSubmit={this.searchFilm}>
          <input type="text" onChange={this.handleSearch} placeholder="Film Name"/>
          <button type="submit">Submit</button>
        </form>
        <h2>{title}</h2>
        <h2>{score}</h2>
        <h3>{director}</h3>
        <h3>{genre}</h3>
        <h3>{rated}</h3>
        <h3>{awards}</h3>
        <h3>{date}</h3>
        <h3>{runtime}</h3>
        <img src={poster} alt=""/>
        <p>{plot}</p>
      </div>
    )
  }
}

export default FilmPoster;
