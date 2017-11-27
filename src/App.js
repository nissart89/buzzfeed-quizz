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
      "quizz": {
        "title": '',
        "description": ''
      },
      "results": [
        {
          "title": '',
          "description": '',
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

  //  QUIZZ CHANGE HANDLER
  handleQuizzChange(type, e) {
    if (type === 'title') {
      let quizz = this.state.quizz;
      quizz.title = e ;
      this.setState({ quizz });
    }
    else {
      let quizz = this.state.quizz;
      quizz.description = e ;
      this.setState({ quizz });
    }
  }
  //  RESULTS CHANGE HANDLER
  handleResultsChange(type, index, e) {
    if (type === 'title') {
      let results = [ ...this.state.results ];
      results[index].title = e ;
      this.setState({ results });

    }
    else {
      let results = [ ...this.state.results ];
      results[index].description = e ;
      this.setState({ results });
    }
  }
  //  QUESTIONS CHANGE HANDLER
  handleQuestionChange(type, index, e) {
    if (type === 'title') {
      let questions = [ ...this.state.questions ];
      questions[index].title = e ;
      this.setState({ questions });

    }
    else {
      let questions = [ ...this.state.questions ];
      questions[index].description = e ;
      this.setState({ questions });
    }
  }

  render() {
    const results = this.state.results.map((x, index)=> <Results
                                                            title={this.state.results[index].title}
                                                            description={this.state.results[index].description}
                                                            onTextChange={(type, e) => this.handleResultsChange(type, index, e)}
                                                            key={index}
                                                          />)

    const questions = this.state.questions.map((x, index) => <Questions
                                                                title={this.state.questions[index].title}
                                                                description={this.state.questions[index].description}
                                                                onTextChange={(type, e) => this.handleQuestionChange(type, index, e)}
                                                                key={index}
                                                              />)
    return (
      <div className="App">

        <TitleAndDescription
          onTextChange={(type, e) => this.handleQuizzChange(type, e)}
          title={this.state.quizz.title}
          description={this.state.quizz.description}
          titlePlaceholder="Quizz title"
          descriptionPlaceholder="Quizz description"/>

        <h4>Results</h4>
        {results}
        <Button name="Add a result" onClick={() => this.addResult()}/>

        <h4>Questions</h4>
        {questions}
        <br />
        <Button name="Add a question" onClick={() => this.addQuestion()}/>


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
