import React, { Component } from 'react'
import { Section } from "./Section"
import { TitleAndDescription } from "./TitleAndDescription"
import { Button } from "./Button"

export class Questions extends Component {
  render() {
  const answers = this.props.answers.map((x, index) => <Answers results={this.props.results}
                                                              title='Answer'
                                                              key={index}
                                                            />)
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
              {answers}
            </ul>
          </Section>
          <Button name="Add an answer" onClick={this.props.addAnswer}/>
        </Section>
      </div>
    )
  }
}

class Answers extends Component {
  render() {
    const results = this.props.results.map((x, index)=> <option>{this.props.results[index].title}</option>)

    console.log(this.props.results);
    return (
      <li>
        <input type="text" placeholder={this.props.title} />
        <br />
        <select>
          {results}
        </select>
      </li>
    )
  }
}
