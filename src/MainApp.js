import React, { Component } from 'react';
import Quizz from './App';
import {ListOfQuizz} from './components/ListOfQuizz'
import { Button } from './components/Button';
import TakeQuizz from './takeQuizz';



class MainApp extends Component {
  constructor(props) {
    super(props)

    const localQuizz = window.localStorage.getItem("SavedQuizz");
    const parsedLocalQuizz = JSON.parse(localQuizz);
    this.state = {
      'SavedQuizz': parsedLocalQuizz ? parsedLocalQuizz['SavedQuizz'] : [],
      'CreateQuizz': false,
      'LoadQuizz': false,
      'TakeQuizz' : false
    }
  }
  saveQuizz(state) {
    if (!state.quizz.title) {
      let quizzTitle = window.prompt('Please enter a title for your awesome BuzzQuizz')
      if (quizzTitle) {
        state.quizz.title = quizzTitle;
      }
      else {
        return alert('Not saved...')
      }
    }

    // after the first save, check the quiz id and overwrite same quiz
    if (this.state.SavedQuizz.length < 1) {
      const savedTooltip = document.getElementById('saved-tooltip');
      savedTooltip.classList.add('visible');
      setTimeout(() => savedTooltip.classList.remove('visible'), 1250);

      this.setState({"SavedQuizz": [...this.state.SavedQuizz, state]})
      // Save locally
      localStorage.setItem('SavedQuizz', JSON.stringify({"SavedQuizz": [...this.state.SavedQuizz, state]}));
    }
    else {
      for (let i = 0; i < this.state.SavedQuizz.length; i++) {
        if (this.state.SavedQuizz[i].id === state.id) {
          const savedQuizz = this.state.SavedQuizz
          savedQuizz.splice([i], 1, state)
          this.setState({"SavedQuizz": savedQuizz})

          localStorage.setItem('SavedQuizz', JSON.stringify({"SavedQuizz": savedQuizz}));
          break;
        }
        else {
          const savedTooltip = document.getElementById('saved-tooltip');
          savedTooltip.classList.add('visible');
          setTimeout(() => savedTooltip.classList.remove('visible'), 1250);

          localStorage.setItem('savedStates', this.state.SavedQuizz);
          this.setState({"SavedQuizz": [...this.state.SavedQuizz, state]})
          localStorage.setItem('SavedQuizz', JSON.stringify({"SavedQuizz": [...this.state.SavedQuizz, state]}));

        }
      }
    }
  }
  handleTakeQuizz(index) {
    this.setState({ LoadQuizz: index })
    this.setState({ TakeQuizz: true })
  }
  
  handleEditQuizz(index) {
    this.setState({LoadQuizz : index})
    this.setState({CreateQuizz : true})
  }

  handleCreateNewQuizz(newQuizz) {
    this.setState({LoadQuizz : false})
    this.setState({TakeQuizz : false})
    this.setState({CreateQuizz : newQuizz})
  }

  takeQuizz() {
    if (this.state.TakeQuizz) {
      console.log(this.state.TakeQuizz)
    return ( 
      <TakeQuizz loadQuizz={this.state.LoadQuizz !== false ? this.state.SavedQuizz[this.state.LoadQuizz] : null} />)
    }
  }

  createQuizz() {
    let that = this;
    if (this.state.CreateQuizz) {
      return (
        <Quizz saveQuizz={(state) => this.saveQuizz(state)} loadQuizz={this.state.LoadQuizz !== false ? this.state.SavedQuizz[this.state.LoadQuizz] : null}/>
      )
    }
  }

  handleDeleteQuizz(index) {
    const ok = window.confirm(`Are you sure you want to delete the quizz "${this.state.SavedQuizz[index].quizz.title}"?`)
    if (ok) {
      const savedQuizz = this.state.SavedQuizz;
      savedQuizz.splice([index], 1)
      this.setState({"SavedQuizz": savedQuizz})
      localStorage.setItem('SavedQuizz', JSON.stringify({"SavedQuizz": savedQuizz}));
    }
  }

  render() {
    return (
      <div className="App">
        { this.state.CreateQuizz ? null : <h1>BuzzQuizz FTW</h1>}
        { this.state.CreateQuizz ? null : <Button css="create-quizz-button" name="Create a New Quizz" onClick={() => this.handleCreateNewQuizz(true)}/>}
        { this.createQuizz() }
        { this.takeQuizz() }
        {this.state.CreateQuizz || this.state.TakeQuizz ? <Button css="quizz-back-button" name="Back to the Quizz List" onClick={() => this.handleCreateNewQuizz(false)}/> : null }
        {this.state.CreateQuizz || this.state.TakeQuizz ? null : <ListOfQuizz deleteQuizz={(index) => this.handleDeleteQuizz(index)} editQuizz={(index) => this.handleEditQuizz(index)} takeQuizz={(index) => this.handleTakeQuizz(index)} listOfQuizz={this.state.SavedQuizz}/>}
        <div id="saved-tooltip" className="saved-tooltip">Quizz Saved!</div>
      </div>
    );
  }
}
export default MainApp;
