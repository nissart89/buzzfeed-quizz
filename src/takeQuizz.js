import React, { Component } from 'react';

// Custom Components
import { Button } from './components/Button';
import { TitleAndDescription } from './components/TitleAndDescription'
import { DisplayQuestions } from './components/displayQuestions'

// React Components
import logo from './logo.svg';
import './App.css';

class TakeQuizz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuiz: {
        "quizz": {
          "title": 'Best Quizz Title',
          "description": 'This is obviously the best quizz'
        },
        "results": [
          {
            "title": 'best result',
            "description": 'this is obviously the best result',
            "count": ''
          },
          {
            "title": 'worst result',
            "description": 'this is most definitly the worst resutl',
            "count": ''
          },
        ],
        "questions": [
          {
            "title": "what result would you like?!",
            "description": "this questions is to determine which result you want to get",
            "answers": [
              {
                "title": "The Best Result",
                "result": "best result",
              },
              {
                "title": "The Worst Result",
                "result": "worst result",
              },
            ]
          },
          {
            "title": "what result would you like?!!!",
            "description": "this questions is to determiadsfafne which result you want to get",
            "answers": [
              {
                "title": "The Best Resu12lt",
                "result": "best result",
              },
              {
                "title": "The Worasdfast Result",
                "result": "worst result",
              },
            ]
          }
        ]
      },
      answers : []


    }
  }
  answerQuestion(string) {
    let answers = this.state.answers
    this.setState({ answers : answers.concat(string) })
  }

  deleteQuestion() {
    let quiz = this.state.currentQuiz
    quiz.questions.splice(0,1)
    this.setState({currentQuiz : quiz})
  }

  handleAnswerClick(result) {
    let quiz = this.state.currentQuiz
    let answers = this.state.answers
    answers.push(result)
    quiz.questions.splice(0, 1)
    this.setState({ 
      currentQuiz: quiz,
      answers: answers
     })
  }

  questionOrResult() {
      if (this.state.currentQuiz.questions.length > 0) {
        return (
          <div>
            <DisplayQuestions questions={this.state.currentQuiz.questions[0]} answerClick={(result) => this.handleAnswerClick(result)} />
          </div>
        )
      }
      else {
        let currentResult = this.state.answers.sort((a, b) =>
          this.state.answers.filter(v => v === a).length
          - this.state.answers.filter(v => v === b).length
        ).pop()
        let result = this.state.currentQuiz.results.find(o => o.title === currentResult);
        console.log(result)
        return (
          <TitleAndDescription
            title={result.title}
            description={result.description}
            notEditable
          />
        )
      }
  }

  render () {
    return (
      <div className='takeQuizz'>
        <div className="container-quizz-header">
          <h1>Buzz<br />Quizz</h1>
          <TitleAndDescription
            title = {this.state.currentQuiz.quizz.title}
            description={this.state.currentQuiz.quizz.description} 
            notEditable
            />
        </div>
        {this.questionOrResult()}
      </div>

    )
  }

}

export default TakeQuizz;
