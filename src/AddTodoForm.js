import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

function AddTodoForm({ onAddTodo }) {
	const [todoTitle, setTodoTitle] = useState("");

	const handleTitleChange = (event) => {
		setTodoTitle(event.target.value);
	};

	const handleAddTodo = (event) => {
		event.preventDefault();
		onAddTodo(todoTitle);
		setTodoTitle("");
	};

	return (
		<form onSubmit={handleAddTodo}>
			<InputWithLabel
				todoTitle={todoTitle}
				handleTitleChange={handleTitleChange}
			>
				Title
			</InputWithLabel>
			<button type="submit">Add</button>
		</form>
	);
}

export default AddTodoForm;
