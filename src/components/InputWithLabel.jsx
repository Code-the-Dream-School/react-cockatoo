import React, { useEffect, useRef } from 'react';
import { TextField } from '@mui/material';

function InputWithLabel(props) {
	const { todoTitle, handleTitleChange, children } = props;
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	});

	return (
		<>
			<TextField
				type='text'
				name='title'
				id='outlined-basic'
				label={children}
				variant='filled'
				value={todoTitle}
				onChange={handleTitleChange}
				ref={inputRef}
				size='small'
				multiline
			/>
		</>
	);
}

export default InputWithLabel;
