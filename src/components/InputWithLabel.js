import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types'

function InputWithLabel({
    todoTitle,
    handleTitleChange,
    children
}) {
    const inputRef = useRef();



    useEffect(() => {
        inputRef.current.focus();
    });

    return (
        <>
            <label htmlFor="todoTitle"> {children} </label>
            <input
                ref={inputRef}
                id="todoTitle"
                htmlFor="todoTitle"
                value={todoTitle}
                onChange={handleTitleChange}
                type="type"
                name="title"
            >

            </input>
        </>
    );
}

InputWithLabel.propType = {
    todoTitle: PropTypes.func,
    handleTitleChange: PropTypes.func,
    children: PropTypes.func
};



export default InputWithLabel;