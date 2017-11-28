import React from 'react'

export const Button = (props) => {
    return (
        <button className={props.css} onClick={props.onClick}>{props.name}</button>
    );
}
