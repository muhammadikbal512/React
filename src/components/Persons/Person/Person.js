import React, {Component} from 'react';
import styles from './Person.module.css'

class Person extends Component {
   render() {
      return (
          <div className={styles.Person}>
              <p onClick={this.props.click}>Hello my name is {this.props.name} and I am {this.props.age} years old</p>
              <p>{this.props.children}</p>
              <input type="text" onChange={this.props.change} value={this.props.name} />
           </div>
      )
   }
};

export default Person;
