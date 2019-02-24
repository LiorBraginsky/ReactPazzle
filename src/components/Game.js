import React, { Component } from 'react';
import './styles.css';
import Pazzle from './Pazzle';


class Game extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-container">
          <h3>React Pazzle</h3>
          <Pazzle />
        </div>
      </div>
    );
  }
}

export default Game;
