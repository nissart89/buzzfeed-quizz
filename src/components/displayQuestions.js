import React, { Component } from 'react'

// Custom Components
import { Button } from './Button';
import { TitleAndDescription } from './TitleAndDescription';
import { Section } from './Section'

export class DisplayQuestions extends Component {
    
    render() {
        let answerButtons = this.props.questions.answers.map((x) => <Button name={x.title} onClick={() => this.props.answerClick(x.result)}/>)
        return (
            <div className="question-answer">
                <Section>
                    <TitleAndDescription
                        title= {this.props.questions.title}
                        description={this.props.questions.description}
                        notEditable
                    />
                </Section>
                {answerButtons}
            </div>

        )
    }

}