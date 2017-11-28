import React, { Component } from 'react'
import { Button } from './Button';

import { Section } from "./Section"
import { TitleAndDescription } from "./TitleAndDescription"

export class Results extends Component {
    deleteButton() {
      if (this.props.resultsLength > 1) {
        return <Button css="delete-button" name="Delete this result" onClick={this.props.resultDelete}/>
      }
    }
    render() {
        return (
            <div>
              <Section>
                  <TitleAndDescription
                      onTextChange={this.props.onTextChange}
                      title={this.props.title}
                      description={this.props.description}
                      titlePlaceholder="Results"
                      descriptionPlaceholder="Results detail"
                  />
                  {this.deleteButton()}
              </Section>
            </div>
        )
    }
}
