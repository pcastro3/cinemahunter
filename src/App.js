import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class FilmPoster extends Component {
  state = {
    filmPoster: {}
  }

  componentDidMount () {
    axios.get('http://www.omdbapi.com/?apikey=7d40e9d8&i=tt2294629')
    .then(res => res.data)
    .then(res => {
      this.setState = {filmPoster: res};
    });
  }



  // Axios React tutorial



  render() {
    return (
      <div className="App">
        <h1>Cinema Hunter</h1>
        <input type="text" placeholder="Film Name"/>
      </div>
    );
  }
}

export default FilmPoster;
