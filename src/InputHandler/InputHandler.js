import React from 'react';
import '../App.css';

const Input = props => {


    // TAKE INPUT FROM USER (MOVIE NAME), THEN USE IT TO FETCH MOVIE DETAILS

    return (
      <div className='App'>
        <input type="text" placeholder="Film Name"/>
      </div>
    )

    const input = document.getElementById('input').value;
    console.log(input);
    return input;

    // const film = [];
    // const input = document.getElementById('input').value;
    // film.push(input);
    // console.log(film);
}

export default Input;
