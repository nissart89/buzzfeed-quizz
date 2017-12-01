import React, { Component } from 'react';
import Quizz from './App';
import { Button } from './components/Button';
import { TakeQuizz } from './takeQuizz'

class MainApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "QuizzState": [],
    }
  }
  saveQuizz(state) {
    this.setState({"QuizzState": [...this.state.QuizzState, state]})
  }
  renderQuizz(state) {

  }
  render() {
    return (
      <div>
        {/* <Quizz renderQuizz="..." saveQuizz={(state) => this.saveQuizz(state)}/> */}
        {/* <TakeQuizz /> */}
      </div>
    );
  }
}
export default MainApp;
