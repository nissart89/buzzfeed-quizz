import React, { Component } from 'react'

export class TitleAndDescription extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //   title: 'TITLE',
        //   description: '',
        // };
    }

    handleTextChange(type, e) {
        this.props.onTextChange(type, e.target.value)
    }
    // handleDescriptionChange(e) {
    //     this.props.onDescriptionChange(e.target.value)
    // }

    render() {
        const title = this.props.title;
        const description = this.props.description;

        return (
            <div>
                <input name="title" value={title} onChange={(e) => this.handleTextChange('title', e)} type="text" placeholder={this.props.titlePlaceholder} />
                <br />
                <textarea name="description" value={description} onChange={(e) => this.handleTextChange('description', e)} type="textarea" placeholder={this.props.descriptionPlaceholder} />
            </div>
        )
    }
}
