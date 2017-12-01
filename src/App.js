import React, { Component } from 'react';

// Custom Components
import { Button } from './components/Button';
import { Results } from './components/Results';
import { Questions } from './components/QuestionAndAnswer';
import { TitleAndDescription } from './components/TitleAndDescription';

// React Components
import logo from './logo.svg';
import './App.css';

class Quizz extends Component {
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
          "count": ''
        },
        {
          "title": '',
          "description": '',
          "count": ''
        },
      ],
      "questions": [
        {
          "title": "",
          "description": "",
          "answers": [
            {
              "title": "",
              "result": "",
            },
            {
              "title": "",
              "result": "",
            },
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
    this.setState({ questions: this.state.questions.concat(questionElement) })
  }

  addResult() {
    const resultElement = [{
      "title": '',
      "description": '',
      "count": '',
    }]
    this.setState({results : this.state.results.concat(resultElement)})
  }

  addAnswer (index, e) {
    const answerElement = {
      "title": "",
      "result": ""
    }
    let questions = [ ...this.state.questions ]
    questions[index].answers.push(answerElement);
    this.setState({questions : questions})
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

  handleDeleteButton(index, type, e) {
    let update = this.state[type];
    update.splice([index], 1)
    this.setState({ update });
  }

  handleAnswerDelete(indexA, indexQ) {
    console.log(indexA, indexQ)
    let questions = this.state.questions
    console.log(questions)
    questions[indexQ].answers.splice(indexA, 1)
    this.setState({ questions})
  }

  handleAnswerChange(type, indexQ, indexA, e) {
      let key;
      type === 'input' ? key = 'title' : key = 'result';
      let questions = this.state.questions;
      let answers = questions[indexQ].answers;
      answers[indexA][key] = e;
      this.setState({ questions });
  }

  saveQuizz() {
    this.props.saveQuizz(this.state);
  }
  render() {
    const results = this.state.results.map((x, index)=> <Results
                                                            title={this.state.results[index].title}
                                                            description={this.state.results[index].description}
                                                            onTextChange={(type, e) => this.handleResultsChange(type, index, e)}
                                                            resultDelete={(e) => this.handleDeleteButton(index, 'results', e)}
                                                            resultsLength={this.state.results.length}
                                                            key={index}
                                                          />)

    const questions = this.state.questions.map((x, index) => <Questions
                                                                results={this.state.results}
                                                                addAnswer={(e) => this.addAnswer(index, e)}
                                                                answers={this.state.questions[index].answers}
                                                                title={this.state.questions[index].title}
                                                                description={this.state.questions[index].description}
                                                                onTextChange={(type, e) => this.handleQuestionChange(type, index, e)}
                                                                onAnswerChange={(type, indexA, e) => this.handleAnswerChange(type, index, indexA, e)}
                                                                questionDelete={(e) => this.handleDeleteButton(index, 'questions', e)}
                                                                answerDelete={(indexA) => this.handleAnswerDelete(indexA, index)}
                                                                questionsLength={this.state.questions.length}
                                                                key={index}
                                                              />)

    return (
      <div className="container-quizz-app">
        <div className="container-quizz">
          <div className="container-quizz-header">
            <h1>Buzz<br/>Quizz</h1>
            <TitleAndDescription
              onTextChange={(type, e) => this.handleQuizzChange(type, e)}
              title={this.state.quizz.title}
              description={this.state.quizz.description}
              titlePlaceholder="Title"
              descriptionPlaceholder="Description"/>
          </div>
          <div className="container-results">
            <h2>Results</h2>
            <div className="result-list">
              {results}
            </div>
            <Button name="Add a result" onClick={() => this.addResult()}/>
          </div>
          <div className="container-questions">
            <h3>Questions</h3>
            {questions}
            <br />
            <Button name="Add a question" onClick={() => this.addQuestion()}/>
          </div>
        </div>
        <Button onClick={() => this.saveQuizz()} name="Save this Quizz"/>
      </div>
    );
  }
}

export default Quizz;
