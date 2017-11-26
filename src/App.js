import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TitleAndDescription extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   title: 'TITLE',
    //   description: '',
    // };
  }

  handleTitleChange(e) {
    this.props.onTitleChange(e.target.value)
  }
  handleDescriptionChange(e) {
    this.props.onDescriptionChange(e.target.value)
  }

  render() {
    const title = this.props.title;
    const description = this.props.description;

    return (
      <div>
        <input name="title" value={title} onChange={(e) => this.handleTitleChange(e)} type="text" placeholder={this.props.titlePlaceholder} />
        <br />
        <textarea name="description" value={description} onChange={(e) => this.handleDescriptionChange(e)} type="textarea" placeholder={this.props.descriptionPlaceholder}/>
      </div>
    )
  }
}
//
// class Questions extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <Section>
//           <TitleAndDescription title="Question Title" description="Question Description" />
//           <h4>Answers</h4>
//           <Section>
//             <Answers results={this.props.results} title='Answers' />
//           </Section>
//           <Button name='Add +' />
//         </Section>
//       </div>
//     )
//   }
// }
//
// class Answers extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   results() {
//
//   }
//
//   render() {
//     console.log(this.props.results);
//     return (
//       <div>
//         <input type="text" placeholder={this.props.title} />
//         <br />
//         <select>
//           <option>item</option>
//         </select>
//       </div>
//     )
//   }
// }

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
    };
  }
  handleTitleChange(title) {
    this.setState({title: title})
  }
  handleDescriptionChange(description) {
    this.setState({description: description})
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

function Button(props) {
  return (
    <button onClick={props.onClick}>{props.name}</button>
  );
}

function duplicate(element) {

}

function Section(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "results": [
        {
          "title": '',
          "results": ''
        },
        {
          "title": '',
          "results": ''
        }
      ],
      "questions": [
        {
          "index": 0,
          "titel": "",
          "description": "",
          "answers": [
            {
              "index":0,
              "title": "",
              "result": ""
            }
          ]
        }
      ]
    }
  }

  addQuestion() {

  }

  addResult() {
    const resultElement = [{
      "title": '',
      "results": ''
    }]

    this.setState({results : this.state.results.concat(resultElement)})

  }

  render() {
    const results = this.state.results.map((x, index)=> <Results key={index}/>)
    return (
      <div className="App">

        <TitleAndDescription title='Quizz Title' description="Quizz Description" />

        <h4>Results</h4>
        {results}
        <Button name="Add +" onClick={() => this.addResult()}/>

        <h4>Questions</h4>
        {/* <Questions results={this.state.results}/> */}
        <br />
        <Button name="Add +"/>


          {/* Answers
          <br />
          <input type="text" value="Answer title" />
          <br />
          <select>
            <option>Assign a result</option>
          </select>
          <br />
          <button>Add Answer</button>
          <br />
          <br />
          <button>Add Question</button>
        </div> */}


      </div>
    );
  }
}

export default App;


//  STATE!
  // "results": [
  //   {
  //     "title": '',
  //     "results": ''
  //   }
  // ],
  // "questions": [
  //   {
  //     "titel": "",
  //     "description": "",
  //     "answers": {
  //       "title": "",
  //       "result": ""
  //     }
  //   }
  // ]
// }
