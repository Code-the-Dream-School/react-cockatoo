import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/InputWithLabel.module.css';

const InputWithLabel = ({ todoTitle, handleTitleChange }) => {
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
		<textarea
			value={todoTitle}
			className={styles.textField}
			onChange={handleTitleChange}
			inputRef={inputRef}
			rows='2'
			cols='40'
			aria-label='Enter your message'
			required
		/>
	);
};

InputWithLabel.propTypes = {
	todoTitle: PropTypes.string,
	handleTitleChange: PropTypes.func,
	id: PropTypes.string,
	children: PropTypes.string,
};

export default InputWithLabel;
