import React, { Component } from 'react'
import { Button } from './Button';

export class ListOfQuizz extends Component {
  render() {
    console.log(this.props.listOfQuizz);
    const element = this.props.listOfQuizz.map((x, index) => <li><span>Quizz #{index + 1} > {this.props.listOfQuizz[index].quizz.title}</span><Button css="edit-quizz-button" name="Edit" onClick=""/></li>)
    return (
      <div>
        <ul className="quizz-list">
          {element}
        </ul>
      </div>
    );
  }
}
