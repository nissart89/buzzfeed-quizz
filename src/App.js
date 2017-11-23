import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TitleAndDescription extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <input type="text" placeholder={this.props.title}/>
        <br/>
        <textarea type="textarea" placeholder={this.props.description}></textarea>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleAndDescription title="Quizz Title" description="Quizz Description"/>
        <div>
          Results
          <br/>
          <TitleAndDescription title="Result Title" description="Result Description"/>
          <br/>
          <button>Add</button>
        </div>
        <div>
          Questions 1 of x
          <br/>
          <TitleAndDescription title="Question Title" description="Question Description"/>
          <br/>
          Answers
          <br/>
          <input type="text" value="Answer title"/>
          <br/>
          <select>
          <option>Assign a result</option>
          </select>
          <br/>
          <button>Add Answer</button>
          <br/>
          <br/>
          <button>Add Question</button>
        </div>


      </div>
    );
  }
}

export default App;
