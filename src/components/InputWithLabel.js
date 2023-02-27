import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/InputWithLabel.module.css';

const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<>
			<label htmlFor='todoTitle'>{children}</label>
			<textarea
				value={todoTitle}
				className={styles.textField}
				onChange={handleTitleChange}
				ref={inputRef}
				rows='2'
				cols='40'
				aria-label='Enter your message'
				required
			/>
		</>
	);
};

InputWithLabel.propTypes = {
	todoTitle: PropTypes.string,
	handleTitleChange: PropTypes.func,
	children: PropTypes.string,
};

export default InputWithLabel;
