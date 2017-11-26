import React, { Component } from 'react';

// Custom Components
import { Button } from './components/Button';
import { Results } from './components/Results';
import { Questions } from './components/QuestionAndAnswer';
import { TitleAndDescription } from './components/TitleAndDescription';

// React Components
import logo from './logo.svg';
import './App.css';



function duplicate(element) {

}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "results": [
        {
          "title": '',
          "results": ''
        }
      ],
      "questions": [
        {
          "index": 0,
          "titel": "",
          "description": "",
          "answers": [
            {
              "index":0,
              "title": "",
              "result": ""
            }
          ]
        }
      ]
    }
  }

  addQuestion() {

  }

  addResult() {
    const resultElement = [{
      "title": '',
      "results": ''
    }]

    this.setState({results : this.state.results.concat(resultElement)})

  }

  render() {
    const results = this.state.results.map((x, index)=> <Results key={index}/>)
    return (
      <div className="App">

        <TitleAndDescription title='Quizz Title' description="Quizz Description" />

        <h4>Results</h4>
        {results}
        <Button name="Add +" onClick={() => this.addResult()}/>

        <h4>Questions</h4>
        <Questions />
        <br />
        <Button name="Add +"/>


          {/* Answers
          <br />
          <input type="text" value="Answer title" />
          <br />
          <select>
            <option>Assign a result</option>
          </select>
          <br />
          <button>Add Answer</button>
          <br />
          <br />
          <button>Add Question</button>
        </div> */}


      </div>
    );
  }
}

export default App;


//  STATE!
  // "results": [
  //   {
  //     "title": '',
  //     "results": ''
  //   }
  // ],
  // "questions": [
  //   {
  //     "titel": "",
  //     "description": "",
  //     "answers": {
  //       "title": "",
  //       "result": ""
  //     }
  //   }
  // ]
// }
