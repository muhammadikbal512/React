import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
import styles from './Person.module.css'
import withClass from '../../../hoc/withClass'
import AuthContext from '../../../context/auth-context'

class Person extends Component {
   constructor(props) {
      super(props)
      this.inputElementRef = React.createRef();
   }

   componentDidMount() {
      // this.inputElement.focus()
      this.inputElementRef.current.focus();
   }


   render() {
      console.log('[Person.js] rendering...')
      return (
          <Fragment>
             <AuthContext.Consumer>
                {(context) => 
                  context.authenticated ? <p>Authenticated ! </p> : <p>Please Login !</p>
                }
             </AuthContext.Consumer>
              <p onClick={this.props.click}>Hello my name is {this.props.name} and I am {this.props.age} years old</p>
              <p key="i2">{this.props.children}</p>
              <input 
               key="i3" 
               // ref={(inputEl) => {this.inputElement = inputEl}} 
               ref={this.inputElementRef}
               type="text" 
               onChange={this.props.change} 
               value={this.props.name} />
         </Fragment>
      )
   }
};

Person.propTypes = {
   click: PropTypes.func,
   name: PropTypes.string,
   age: PropTypes.number,
   changed: PropTypes.func
}

export default withClass(Person, styles.Person);
