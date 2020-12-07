import React, { Component, Fragment } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import AuthContext from '../context/auth-context'

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   console.log('[App.js] constructor')
  // }
  state = {
    persons : [
      {id : "asd12ds", name : "iqbal", age: 21},
      {id : "asd12xc", name : "Ditlan", age: 23},
      {id : "asd13as", name : "Angga", age: 22},
    ],
    showPerson: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[App.js] getDerivedStateFromProps', props)
  //   return state;
  // }

  // componentDidMount() {
  //   console.log('[App.js] componentDidMount')
  // }

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

    this.setState((prevState, props) => {
      return {
        persons : persons,
        changeCounter : prevState.changeCounter + 1
      }
    })
  }

 

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[App.js] shouldComponentUpdate')
  //   return true;
  // }

  // componentDidUpdate() {
  //   console.log('[App.js] componentDidUpdate')
  // }

  deleteNameHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons : persons})
  }

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  userNameChangedHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    });
  }

  render() {
    // console.log('[App.js] render')
    let persons = null 

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deleteNameHandler}
            changed={this.changedNameHandler}
            isAuthenticated={this.state.authenticated} />   
        </div>
      )
    }

    
    
    return (
      
      <Fragment>
        <button onClick={() => {this.setState({showCockpit : false})}}>Remove Cockpit</button>
        
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
        { this.state.showCockpit ? 
        (<Cockpit 
          title = {this.props.appTitle}
          showPersons = {this.state.showPerson}
          personLength = {this.state.persons.length}
          click = {this.userNameChangedHandler} 
          />
        ): null }
        {persons}
        </AuthContext.Provider>

      </Fragment>

    );
  }
}

export default withClass(App, styles.App);
