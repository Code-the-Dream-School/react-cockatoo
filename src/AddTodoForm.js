import React from 'react';

// This code is a functional component called AddTodoForm that takes a single prop called props.
// It defines an inner function called handleAddTodo which is passed an event object and does the following:
// First, it calls event.preventDefault() which prevents the default behavior of the form submission.
// Then it accesses the value of the input element by its name attribute, and assigns it to a variable todoTitle.
// Then it calls the props.onAddTodo function, passing the todoTitle variable as an argument. This allows the 
// component to communicate the new todo item to its parent component.
// Finally, it resets the form by calling event.target.reset().
// The component then returns a JSX element that renders a <form> element that has an onSubmit event listener 
//attached to the handleAddTodo function defined above. Inside the form, there is a <label> element with htmlFor 
//attribute, an <input> element with id, type and name attribute, and a <button> element with text "Add".
// So this component is creating a form that takes input and when submitted, it prevents the default behavior
// of form submission, gets the value of input and passing it to the onAddTodo function that is passed as a prop. It also resets the form after submission.


const AddTodoForm = (props) => {
  
	const handleAddTodo = (event) => {
		event.preventDefault();
    console.log(todoTitle);

		const todoTitle = event.target.title.value;

	props.onAddTodo(todoTitle);

		event.target.reset();
	};

	return (
		<div>
			<form onSubmit={handleAddTodo}>

				<label for='todoTitle'>Title: .</label>
				<input id='todoTitle' type='text' name='title'></input>

				<button>Add</button>
			</form>
		</div>
	);
};

export default AddTodoForm;
