import React from 'react';

import styles from './Cockpit.module.css'

const cockpit = (props) => {
    const classes = [];
    let btnClass = [styles.button]

    if (props.showPersons) {
        btnClass.push(styles.Red)
    }


    if (props.persons.length <= 2) {
      classes.push(styles.red) // classes =['red']
    }

    if (props.persons.length <= 1) {
      classes.push(styles.bold) // classes = ['red', 'bold']
    }


    return (
        <div>
            <h1>Hi i'm a React App</h1>
            <p className={classes.join(' ')}>This is really working !</p>
            <button className={btnClass.join(' ')} onClick={props.click}>Toggle Persons</button>
        </div>

    );
}

export default cockpit;