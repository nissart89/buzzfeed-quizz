import React, { Component } from 'react'
import { Section } from "./Section"
import { TitleAndDescription } from "./TitleAndDescription"

export class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
        };
    }
    handleTitleChange(title) {
        this.setState({ title: title })
    }
    handleDescriptionChange(description) {
        this.setState({ description: description })
    }
    render() {
        const title = this.state.title;
        const description = this.state.description;
        return (
            <div>
                <Section buttonName='add +'>
                    <TitleAndDescription
                        onTitleChange={(e) => this.handleTitleChange(e)}
                        onDescriptionChange={(e) => this.handleDescriptionChange(e)}
                        title={this.state.title}
                        description={this.state.description}
                        titlePlaceholder="Results title"
                        descriptionPlaceholder="Results description"
                    />
                </Section>
            </div>
        )
    }
}