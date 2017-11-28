import React, { Component } from 'react'
import { Section } from "./Section"
import { TitleAndDescription } from "./TitleAndDescription"

export class Results extends Component {
    render() {
        return (
            <div>
                <Section buttonName='add +'>
                    <TitleAndDescription
                        onTextChange={this.props.onTextChange}
                        title={this.props.title}
                        description={this.props.description}
                        titlePlaceholder="Results"
                        descriptionPlaceholder="Results detail"
                    />
                </Section>
            </div>
        )
    }
}
