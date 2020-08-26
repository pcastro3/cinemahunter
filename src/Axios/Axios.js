import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import { StyledH1, StyledH2, StyledH3, Form, Error, StyledDiv, Details, Plot, Block1, Block2, Noms, Image } from '../StyledComponent/StyledComponent';

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

    // HANDLE ERROR

    let unfound = 'Unable to find Film. Try again =)'

    if(this.state.posters.Response === "False") {
      return (
        <div className="App">
          <StyledH1>Cinema Hunter</StyledH1>
          <Form action="" onSubmit={this.searchFilm}>
            <input type="text" onChange={this.handleSearch} placeholder="Film Name"/>
            <button type="submit">Submit</button>
          </Form>
          <Error>{unfound}</Error>
        </div>
      )
    }

    // DEFINE DETAILS FROM API

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

    // HIDE BEFORE OUTPUT + OUTPUT DATA


    if(!this.state.posters.Response) {
      return (
        <div className='App'>
          <StyledH1>Cinema Hunter</StyledH1>
          <Form action="" onSubmit={this.searchFilm}>
            <input type="text" onChange={this.handleSearch} placeholder="Film Name"/>
            <button type="submit">Submit</button>
          </Form>
        </div>
      )
    }

    // HIDE BEFORE OUPUT ^



    // OUTPUT DATA

      else {
        return (
          <div className="App">
            <StyledH1>Cinema Hunter</StyledH1>
            <Form action="" onSubmit={this.searchFilm}>
              <input type="text" onChange={this.handleSearch} placeholder="Film Name"/>
              <button type="submit">Submit</button>
            </Form>
            <StyledDiv>
              <Image>
                <img src={poster} alt=""/>
              </Image>
              <Details>
                <Block1>
                  <StyledH2>{title}</StyledH2>
                  <StyledH2>IMDB Rating: {score}/10</StyledH2>
                  <StyledH3>Director: {director}</StyledH3>
                  <StyledH3>{genre}</StyledH3>
                  <StyledH3>{cast}</StyledH3>
                  <StyledH3>Rated {rated}</StyledH3>
                  <StyledH3>Year of Release: {date}</StyledH3>
                  <StyledH3>{runtime}</StyledH3>
                </Block1>
                <Block2>
                  <Noms>{awards}</Noms>
                  <Plot>{plot}</Plot>
                </Block2>
              </Details>
            </StyledDiv>
          </div>
        )
      }
  }
}

export default FilmPoster;
