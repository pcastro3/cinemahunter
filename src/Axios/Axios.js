import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import { StyledH1, StyledH2, StyledH3, StyledDiv, Details, Plot, Block1, Block2 } from '../StyledComponent/StyledComponent';

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
          <StyledH1>Cinema Hunter</StyledH1>
          <form action="" onSubmit={this.searchFilm}>
            <input type="text" onChange={this.handleSearch} placeholder="Film Name"/>
            <button type="submit">Submit</button>
          </form>
          <StyledH2>{unfound}</StyledH2>
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
        <StyledH1>Cinema Hunter</StyledH1>
        <form action="" onSubmit={this.searchFilm}>
          <input type="text" onChange={this.handleSearch} placeholder="Film Name"/>
          <button type="submit">Submit</button>
        </form>
        <StyledDiv>
          <div>
            <img src={poster} alt=""/>
          </div>
          <Details>
            <Block1>
              <StyledH2>{title}</StyledH2>
              <StyledH2>{score}</StyledH2>
              <StyledH3>{director}</StyledH3>
              <StyledH3>{genre}</StyledH3>
              <StyledH3>{cast}</StyledH3>
              <StyledH3>{rated}</StyledH3>
              <StyledH3>{date}</StyledH3>
              <StyledH3>{runtime}</StyledH3>
            </Block1>
            <Block2>
              <StyledH3>{awards}</StyledH3>
              <Plot>{plot}</Plot>
            </Block2>
          </Details>

        </StyledDiv>
      </div>
    )
  }
}

export default FilmPoster;
