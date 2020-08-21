import React, {Component} from 'react';
import './App.css';
import FilmPoster from './Axios/Axios';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <FilmPoster />
      </div>
    )
  }
}

export default App;
