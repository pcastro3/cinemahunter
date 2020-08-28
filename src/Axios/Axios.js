import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import { StyledH1, Input, StyledH2, Weight, Strong, Form, Error, StyledDiv, Details, Plot, Block0, Block1, Block2, Noms, Image, LineFix, Shadow } from '../StyledComponent/StyledComponent';

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
            <i className="fa fa-search icon" aria-hidden="true"></i>
            <Input type="text" onChange={this.handleSearch} placeholder="Film Name"/>
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
            <i className="fa fa-search icon" aria-hidden="true"></i>
            <Input type="text" onChange={this.handleSearch} placeholder="Film Name"/>
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
              <i className="fa fa-search icon" aria-hidden="true"></i>
              <Input type="text" onChange={this.handleSearch} placeholder="Film Name"/>
            </Form>
            <StyledDiv>
              <Image>
                <Shadow src={poster} alt=""/>
              </Image>
              <Details>

                <Block0>
                  <StyledH2>{title}</StyledH2>
                  <Weight>
                    <Strong>IMDB Rating: </Strong>
                    {score}/10
                  </Weight>
                </Block0>

                <Block1>
                  <Weight>
                    <Strong>Director: </Strong>
                    <LineFix>{director}</LineFix>
                  </Weight>

                  <Weight>
                    <Strong>Genre: </Strong>
                    <LineFix>{genre}</LineFix>
                  </Weight>

                  <Weight>
                    <Strong>Cast: </Strong>
                    <LineFix>{cast}</LineFix>
                  </Weight>

                  <Weight>
                    <Strong>Rated: </Strong>
                    {rated}
                  </Weight>

                  <Weight>
                    <Strong>Year of Release: </Strong>
                    {date}
                  </Weight>

                  <Weight>
                    <Strong>Runtime: </Strong>
                    {runtime}
                  </Weight>
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
