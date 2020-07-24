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
      // console.log(res);
    });
  }

  render() {
    const posters = this.state.posters.Title
    console.log(posters);
    return (
      <div className="App">
        <h1>Cinema Hunter</h1>
        <input type="text" placeholder="Film Name"/>
        <h2>{posters}</h2>
      </div>
    );
  }
}

export default FilmPoster;
