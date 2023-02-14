import React, { useEffect, useRef } from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
	const inputRef = useRef(null);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			inputRef.current?.focus();
		}, 500);
		// Returning a cleanup function to prevent the useEffect hook from firing twice. This also stops 2nd toast error notification.
		return () => {
			clearTimeout(timeoutId);
		};
	}, []);

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
				inputRef={inputRef}
				size='small'
				multiline
			/>
		</>
	);
};

InputWithLabel.propTypes = {
	todoTitle: PropTypes.string,
	handleTitleChange: PropTypes.func,
	id: PropTypes.string,
	children: PropTypes.string,
};

export default InputWithLabel;
