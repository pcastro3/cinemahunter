import React, {Component} from 'react';
import './App.css';
import FilmPoster from './Axios/Axios';
import Input from './InputHandler/InputHandler';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Input />
        <FilmPoster />
      </div>
    )
  }
}

export default App;
