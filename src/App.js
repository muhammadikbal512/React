import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      {name : "iqbal", age: "21"},
      {name : "Ditlan", age: "23"},
      {name : "Angga", age: "22"},
    ]
  }

  switchNameHandler = () => {
    // console.log('Clicked !')
    this.setState({
      persons : [
        {name : "Muhammad Iqbal", age: "21"},
        {name : "Ditlan", age: "23"},
        {name : "Angga", age: "25"},
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Iqbal</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies : Taekwondo</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
