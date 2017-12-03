import React, { Component } from 'react'
import { Button } from './Button';

export class ListOfQuizz extends Component {
  render() {
    console.log(this.props.listOfQuizz);
    const element = this.props.listOfQuizz.map((x, index) =>
      <li key={index}><span>Quizz #{index + 1}> {this.props.listOfQuizz[index].quizz.title}</span>
        <Button key={index} css="edit-quizz-button" name="Edit" onClick={() => this.props.editQuizz(index)}/>
        <Button key={index} css="delete-quizz-button" name="X" onClick={() => this.props.deleteQuizz(index)}/>
      </li>
    )
    return (
      <div>
        <ul className="quizz-list">
          {element}
        </ul>
      </div>
    );
  }
}
