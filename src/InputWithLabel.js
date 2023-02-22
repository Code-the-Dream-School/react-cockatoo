import React from 'react';
import { useEffect, useRef } from 'react';

const InputWithLabel = function(props) {
const inputRef = useRef(null)
useEffect(() => {
    inputRef.current.focus()
})

return (
        <>
            <label htmlFor="todoTitle">{props.children}</label>
            <input 
                id="todoTitle"
                name="title"
                ref= {inputRef}
                value={props.todoTitle}
                onChange={props.handleTitleChange} />
        </>
    )
};

export default InputWithLabel;