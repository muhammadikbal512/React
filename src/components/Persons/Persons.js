import React, {Component} from 'react'
import Person from './Person/Person'

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps')
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    if (nextProps.persons !== this.props.persons) {
      return true;
    } else if (nextProps.isAuthenticated) {
      return true;
    } else {
      return false;
    }
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('[Person.js] getSnapshotBeforeUpdate')
  //   return {message : 'snapshot' };
  // }

  // componentDidUpdate() {
  //   console.log('[Person.js] componentDidUpdate')
  // }

  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person 
        click={this.props.clicked.bind(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        change={(event) => this.props.changed(event, person.id)}
        />
      )
    })
  }
}

export default Persons;