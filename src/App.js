import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <input type="text" value="title"/>
        <br/>
        <textarea type="textarea" value="description"></textarea>
        <div>
          Results
          <br/>
          <input type="text" value="title"/>
          <br/>
          <textarea type="textarea" value="description"></textarea>
          <br/>
          <button>Add</button>
        </div>
        <div>
          Questions 1 of x
          <br/>
          <input type="text" value="Question Text"/>
          <br/>
          <textarea type="textarea" value="Question Description"></textarea>
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
