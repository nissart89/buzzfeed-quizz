import React, { Component } from 'react';
import Quizz from './App';
import {ListOfQuizz} from './components/ListOfQuizz'
import { Button } from './components/Button';
import { TakeQuizz } from './takeQuizz'

class MainApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'SavedQuizz': [],
      'CreateQuizz': false,
    }
  }
  saveQuizz(state) {
    if (!state.quizz.title) {
      let quizzTitle = window.prompt('Please enter a title for your awesome BuzzQuizz')
      if (quizzTitle) {
        state.quizz.title = quizzTitle;
        const savedTooltip = document.getElementById('saved-tooltip');
        savedTooltip.classList.add('visible');
        setTimeout(() => savedTooltip.classList.remove('visible'), 1250);
        this.setState({"SavedQuizz": [...this.state.SavedQuizz, state]})
      }
      else {
        alert('Not saved...')
      }
    }
    else {
      const savedTooltip = document.getElementById('saved-tooltip');
      savedTooltip.classList.add('visible');
      setTimeout(() => savedTooltip.classList.remove('visible'), 1250);
      // savedTooltip.style.animationDuration;
      // let duration = window.getComputedStyle(savedTooltip, null).getPropertyValue("animationDuration");
      // console.log(' >> ', duration);
      this.setState({"SavedQuizz": [...this.state.SavedQuizz, state]})
    }
  }

  loadQuizz(state) {

  }

  handleCreateNewQuizz(newQuizz) {
    if (!newQuizz) {
      let r = window.confirm("Are you sure?!")
      if (r) this.setState({CreateQuizz : newQuizz})
    } else {
      this.setState({CreateQuizz : newQuizz})
    }
  }

  createQuizz() {
    let that = this;
    if (this.state.CreateQuizz) {
      return (
        <Quizz saveQuizz={(state) => this.saveQuizz(state)}/>
      )
    }
  }

  render() {
    return (
      <div className="App">
        { this.state.CreateQuizz ? null : <h1>BuzzQuizz FTW</h1>}
        { this.state.CreateQuizz ? null : <Button css="create-quizz-button" name="Create a Quizz" onClick={() => this.handleCreateNewQuizz(true)}/>}
        { this.createQuizz() }
        { this.state.CreateQuizz ? <Button css="quizz-back-button" name="Back to the Quizz List" onClick={() => this.handleCreateNewQuizz(false)}/> : null }
        <ListOfQuizz listOfQuizz={this.state.SavedQuizz}/>
        <div id="saved-tooltip" className="saved-tooltip">Quizz Saved!</div>
      </div>
    );
  }
}
export default MainApp;
