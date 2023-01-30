import React from "react";
import "./App.css";

function TodoListItem({ todo, onRemoveTodo }) {
	return (
		<>
			<li>
				{todo.fields.Title || todo.title}
				<button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
			</li>
		</>
	);
}

export default TodoListItem;
