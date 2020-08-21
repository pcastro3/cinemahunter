import React, {Component} from 'react';
import '../App.css';

class Input extends Component {

  state = {
    posters: [],
    search: ''
  }

  // searchFilm = event => {
  //   event.preventDefault();
  //
  //   // this.setState({
  //   //   search: event.target.value
  //   // })
  //
  //   // axios
  //   //   .get(`https://www.omdbapi.com/?apikey=7d40e9d8&t=${this.state.search}`)
  //   //   .then(res => res.data)
  //   //   console.log('Was Submitted');
  // }





    // TAKE INPUT FROM USER (MOVIE NAME), THEN USE IT TO FETCH MOVIE DETAILS

    render () {

      // console.log(this.state.search);

      return (
      <div className='App'>


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
