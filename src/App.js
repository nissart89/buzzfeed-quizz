import React, { Component } from 'react';

// Custom Components
import { Button } from './components/Button';
import { Results } from './components/Results';
import { Questions } from './components/QuestionAndAnswer';
import { TitleAndDescription } from './components/TitleAndDescription';

// React Components
import logo from './logo.svg';
import './App.css';


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
          "title": "",
          "description": "",
          "answers": [
            {
              "title": "",
              "result": ""
            }
          ]
        }
      ]
    }
  }

  addQuestion() {
    const questionElement = [{
      "title": "",
      "description": "",
      "answers": [
        {
          "title": "",
          "result": ""
        }
      ]
    }]
    console.log('clicked')

    this.setState({ questions: this.state.questions.concat(questionElement) })

  }

  addResult() {
    const resultElement = [{
      "title": '',
      "results": ''
    }]
    this.setState({results : this.state.results.concat(resultElement)})
  }

  handleTextChange(type, index, e) {
    if (type === 'title') {
      // this.setState({results: e});
    }
    else {
      // this.setState({ description: e })
    }
  }

  render() {
    const results = this.state.results.map((x, index)=> <Results
                                                            title={this.state.results[index].title}
                                                            description={this.state.results[index].description}
                                                            onTextChange={(type, e) => this.handleTextChange(type, index, e)}
                                                            key={index}
                                                            />)

    const questions = this.state.questions.map((x, index) => <Questions key={index} />)
    return (
      <div className="App">

        <TitleAndDescription title='Quizz Title' description="Quizz Description" />

        <h4>Results</h4>
        {results}
        <Button name="Add +" onClick={() => this.addResult()}/>

        <h4>Questions</h4>
        {questions}
        <br />
        <Button name="Add +" onClick={() => this.addQuestion()}/>


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
