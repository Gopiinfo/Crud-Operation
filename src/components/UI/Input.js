import React from 'react'

const Input = (props) => {
    return (
      <div>
        <input
          type={props.type}
          id={props.id}
          name={props.name}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          required={props.required}
        />
      </div>
    );
}

export default Input
