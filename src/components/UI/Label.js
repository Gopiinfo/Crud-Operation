import React from 'react'

const Label = (props) => {
    return (
      <div>
        <label htmlFor={props.htmlFor}>{props.children}</label>
      </div>
    );
}

export default Label
