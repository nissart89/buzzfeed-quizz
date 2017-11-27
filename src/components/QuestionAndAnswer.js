import React, { Component } from 'react'
import { Section } from "./Section"
import { TitleAndDescription } from "./TitleAndDescription"
import { Button } from "./Button"

export class Questions extends Component {
  render() {
    return (
      <div>
        <Section>
          <TitleAndDescription
              onTextChange={this.props.onTextChange}
              title={this.props.title}
              description={this.props.description}
              titlePlaceholder="Question title"
              descriptionPlaceholder="Question description"
          />
          <h4>Answers</h4>
          <Section>
            <Answers results={this.props.results} title='Answers' />
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
      <div>
        <input type="text" placeholder={this.props.title} />
        <br />
        <select>
          <option>item</option>
        </select>
      </div>
    )
  }
}
