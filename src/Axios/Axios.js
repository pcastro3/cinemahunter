import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import Input from '../InputHandler/InputHandler';

class FilmPoster extends Component {

  state = {
    posters: [],
    search: ''
  }

  componentDidMount () {
    axios.get(`https://www.omdbapi.com/?apikey=7d40e9d8&t=${this.state.search}`)
    .then(res => {
      this.setState({
        posters: res.data
      })
    })
  }

  handleSearch = event => {
    this.setState({
      search: event.target.value
    })
  }

  // searchFilm = event => {
  //   event.preventDefault();
  //
  //   axios.get(`https://www.omdbapi.com/?apikey=7d40e9d8&t=${this.state.search}`)
  //   console.log(this.state.search);
  // }

  render() {
    // console.log(this.state.search);

    const title = this.state.posters.Title;
    const poster = this.state.posters.Poster;

    return (
      <div className="App">
        <h1>Cinema Hunter</h1>
        <form action="" onSubmit={this.searchFilm}>
          <input type="text" onChange={this.handleSearch} placeholder="Film Name"/>
          <button type="submit">Submit</button>
        </form>
        <h2>{title}</h2>
        <img src={poster} alt=""/>
      </div>
    );
  }
}

export default FilmPoster;
