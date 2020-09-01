import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      {id : "asd12ds", name : "iqbal", age: "21"},
      {id : "asd12xc", name : "Ditlan", age: "23"},
      {id : "asd13as", name : "Angga", age: "22"},
    ],
    showPerson: false
  }


  changedNameHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({persons : persons})
  }

  deleteNameHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons : persons})
  }

  userNameChangedHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null 

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={this.deleteNameHandler.bind(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            change={(event) => this.changedNameHandler(event, person.id)} />
          })}    
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Iqbal</h1>
        <button 
        style={style}
        onClick={this.userNameChangedHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
