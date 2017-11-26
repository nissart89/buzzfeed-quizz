import React, { Component } from 'react'
import { Section } from "./Section"
import { TitleAndDescription } from "./TitleAndDescription"
import { Button } from "./Button"

export class Questions extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Section>
          <TitleAndDescription title="Question Title" description="Question Description" />
          <h4>Answers</h4>
          <Section>
            <Answers results={this.props.results} title='Answers' />
          </Section>
          <Button name='Add +' />
        </Section>
      </div>
    )
  }
}

class Answers extends Component {
  constructor(props) {
    super(props);
  }

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