import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TitleAndDescription extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input type="text" placeholder={this.props.title} />
        <br />
        <textarea type="textarea" placeholder={this.props.description}></textarea>
      </div>
    )
  }
}

class Answers extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // for result in results {
    //  do results
    //}

    //}
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
      <Button onClick='' name={props.buttonName}/>
    </div>
  )
}
class App extends Component {
  render() {
    return (
      <div className="App">

        <TitleAndDescription title='Quizz Title' description="Quizz Description" />

        Results
        <Section buttonName='add +'>
          <TitleAndDescription title="Result Title" description="Result Description" />
        </Section>

        Questions
        <Section buttonName='add +'>
          <TitleAndDescription title="Question Title" description="Question Description" />
          Answers
          <Section buttonName='add +'>
            <Answers title='Answers'/>
          </Section>
        </Section>

        
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

