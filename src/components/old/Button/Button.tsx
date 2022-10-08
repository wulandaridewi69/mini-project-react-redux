import React, { Component } from 'react'

// type ButtonState = {
//     id: string,
//     label: string,
//     className: any,
//     onClick: any,
//     disabled: boolean,
// };

const Button = (props) => {
    return (
        <button
            id={props.id}
            className={props.className}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.label}
        </button>
    )

}

export default Button;