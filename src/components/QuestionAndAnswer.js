import React, { Component } from 'react'
import { Section } from "./Section"
import { TitleAndDescription } from "./TitleAndDescription"
import { Button } from "./Button"

export class Questions extends Component {
  deleteButton() {
    if (this.props.questionsLength > 1) {
      return <Button css="delete-button" name="Delete this result" onClick={this.props.questionDelete}/>
    }
  }
  render() {
  const answers = this.props.answers.map((x, index) => <Answers results={this.props.results}
                                                              title='Answer'
                                                              key={index}
                                                              onAnswerChange={(type, e) => this.props.onAnswerChange(type, index, e)}
                                                              onSelectChange={(type, e) => this.props.onSelectChange(type, index, e)}
                                                              answerDelete={() => this.props.answerDelete(index)}
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
          {this.deleteButton()}
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
  handleChange(type, e) {
      this.props.onAnswerChange(type, e.target.value)
  }
  handleDelete(e) {
    this.props.answerDelete(e);
    this.forceUpdate();
  }
  render() {
    const results = this.props.results.map((x, index)=> <option key={index}>{this.props.results[index].title}</option>)
    return (
      <li>
        <input type="text" placeholder={this.props.title} onChange={(e) => this.handleChange('input', e)} />
        <br />
        <select defaultValue="Select a Results" value={this.props.value} onChange={(e) => this.handleChange('select', e)}>
          <option disabled>Select a Results</option>
          {results}
        </select>
        <Button css="delete-button" name="Delete Answer" onClick={(e) => this.handleDelete(e)} />
      </li>
    )
  }
}
