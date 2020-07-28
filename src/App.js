import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class FilmPoster extends Component {
  state = {
    posters: []
  }

  componentDidMount () {
    axios.get('https://www.omdbapi.com/?apikey=7d40e9d8&i=tt2294629')
    .then(res => {
      this.setState({posters: res.data})
    });
  }

  render() {
    const title = this.state.posters.Title;
    const poster = this.state.posters.Poster;
    return (
      <div className="App">
        <h1>Cinema Hunter</h1>
        <input type="text" placeholder="Film Name"/>
        <h2>{title}</h2>
        <img src={poster} alt=""/>
      </div>
    );
  }
}

export default FilmPoster;
