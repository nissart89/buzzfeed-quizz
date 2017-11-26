import React, { Component } from 'react'
import { Section } from "./Section"
import { TitleAndDescription } from "./TitleAndDescription"

export class Results extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     title: '',
        //     description: '',
        // };
    }
    render() {

        return (
            <div>
                <Section buttonName='add +'>
                    <TitleAndDescription
                        // onTextChange={(type, e) => this.handleTextChange(type, e)}
                        onTextChange={this.props.onTextChange}
                        title={this.props.title}
                        description={this.props.description}
                        titlePlaceholder="Results title"
                        descriptionPlaceholder="Results description"
                    />
                </Section>
            </div>
        )
    }
}
