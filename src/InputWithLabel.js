import React, { useEffect, useRef } from "react";

function InputWithLabel(props) {
	const { todoTitle, handleTitleChange, children } = props;
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	});

	return (
		<>
			<label htmlFor="todoTitle">{children}: </label>
			<input
				type="text"
				name="title"
				value={todoTitle}
				onChange={handleTitleChange}
				ref={inputRef}
			/>
		</>
	);
}

export default InputWithLabel;
