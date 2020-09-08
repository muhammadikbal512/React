import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

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
    let persons = null 

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deleteNameHandler}
            changed={this.changedNameHandler} />   
        </div>
      )
    }

    
    
    return (
      
      <div className={styles.App}>
        <Cockpit 
          showPersons = {this.state.showPerson}
          persons = {this.state.persons}
          click = {this.userNameChangedHandler} />
        {persons}
      </div>

    );
  }
}

export default App;
