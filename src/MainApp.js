import React, { Component } from 'react';
import Quizz from './App';
import { Button } from './components/Button';

class MainApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "QuizzState": [],
    }
  }
  saveQuizz(state) {
    const savedTooltip = document.getElementById('saved-tooltip');

    savedTooltip.classList.add('saved');
    this.setState({"QuizzState": [...this.state.QuizzState, state]})
  }
  renderQuizz(state) {

  }
  render() {
    return (
      <div className="App">
        <Quizz renderQuizz="..." saveQuizz={(state) => this.saveQuizz(state)}/>
        <div div="saved-tooltip" className="saved-tooltip">Quizz Saved!</div>
      </div>
    );
  }
}
export default MainApp;
