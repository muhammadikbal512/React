import React from 'react';

const validation = (props) => {
    let ValidationMessage = "Text too long"

    if (props.inputLength <= 5) {
        ValidationMessage = "Text Too Short"
    }
    return (
        <div>
            <p>{ValidationMessage}</p>
        </div>
    )
}

export default validation;
