import React, { Component } from 'react'
import { Section } from "./Section"
import { TitleAndDescription } from "./TitleAndDescription"
import { Button } from "./Button"

export class Questions extends Component {
  render() {
    return (
      <div className="question-answer">
        <Section>
          <TitleAndDescription
              onTextChange={this.props.onTextChange}
              title={this.props.title}
              description={this.props.description}
              titlePlaceholder="Question"
              descriptionPlaceholder="Question detail"
          />
          <h4>Answers</h4>
          <Section>
            <ul className="answer-list">
              <Answers results={this.props.results} title='Answer' />
            </ul>
          </Section>
          <Button name='Add an answer' />
        </Section>
      </div>
    )
  }
}

class Answers extends Component {
  results() {

  }

  render() {
    console.log(this.props.results);
    return (
      <li>
        <input type="text" placeholder={this.props.title} />
        <br />
        <select>
          <option>item</option>
        </select>
      </li>
    )
  }
}
