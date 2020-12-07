import React, { useEffect, useRef } from 'react';

import styles from './Cockpit.module.css'
import AuthContext from '../../context/auth-context'

const Cockpit = (props) => {
  const toggleBtnRef = useRef();


  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    // Http request ...
    // setTimeout(() => {
    //   alert("Data has been Saved")
    // }, 1000)
    toggleBtnRef.current.click()
    return () => {
      console.log('Cockpit.js cleanup work in useEffect') //it runs BEFORE the main useEffect function, but AFTER the first render cycle
    }
  }, []) //useEffect depends on the persons change and use empty array if you want to stop at first render

  //useEffect can use multiple times depends on the data you have or want

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect')
    // Http request ...
    return () => {
      console.log('Cockpit.js cleanup work in 2nd useEffect') //it runs BEFORE the main useEffect function, but AFTER the first render cycle
    }
  },)

    const classes = [];
    let btnClass = [styles.button]

    if (props.showPersons) {
        btnClass.push(styles.Red)
    }


    if (props.personLength <= 2) {
      classes.push(styles.red) // classes =['red']
    }

    if (props.personLength <= 1) {
      classes.push(styles.bold) // classes = ['red', 'bold']
    }


    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working !</p>
            <button 
              ref={toggleBtnRef}
              className={btnClass.join(' ')} 
              onClick={props.click}>Toggle Persons
            </button>
            <AuthContext.Consumer>
              {(context) => 
                <button onClick={context.login}>
                Login
                </button>
            }
            </AuthContext.Consumer>
        </div>

    );
}

export default React.memo(Cockpit);