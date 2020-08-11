import React, {Component} from 'react';
import axios from 'axios';
import FilmPoster from '../Axios/Axios';
import '../App.css';

class Input extends Component {

  state = {
    posters: [],
    search: 'prisoners'
  }

  searchFilm = event => {
    axios
      .get(`https://www.omdbapi.com/?apikey=7d40e9d8&t=${this.state.search}`)
      .then(res => res.data)
      .then(res => {

        // const movie = this.state.search
        // this.setState({
        //   movie
        // })
      })
      console.log('Was Submitted');

  }


  handleSearch = event => {
    this.setState({
      poster: [],
      search: event.target.value
    })
  }


    // TAKE INPUT FROM USER (MOVIE NAME), THEN USE IT TO FETCH MOVIE DETAILS

    render () {

      console.log(this.state.search);

      return (
      <div className='App'>
        <form action="" onSubmit={this.searchFilm}>
          <input type="text"  onChange={this.handleSearch} placeholder="Film Name"/>
          <button type="submit">Submit</button>
        </form>

      </div>
    )

    // const input = document.getElementById('input').value;
    // console.log(input);
    // return input;

    // const film = [];
    // const input = document.getElementById('input').value;
    // film.push(input);
    // console.log(film);
  }
}

export default Input;
