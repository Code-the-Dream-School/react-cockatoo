import React from 'react';


// This code defines a functional component called TodoListItem that takes a single prop called props.
// The component returns a JSX element that renders a <div> element that contains a <li> element. Inside
//  the <li> element it renders the title property of the props.todo object.The TodoListItem component takes
//   a single prop, props which is passed from the parent component. The props object has a single property
//    todo which is an object containing the title and id of the Todo item.The component exports the TodoListItem 
//    component as the default export, which allows it to be imported and used in other parts of the application.
// So this component is rendering the title of the to-do item passed as a prop props.todo.title in a li element and 
// exports the component as the default export.


// 5 Create a new functional React component 
// a.	  Import React from "react" npm package
// b.	  Declare a function named TodoListItem
// c.	  Export TodoListItem function as default module

const TodoListItem = (props) => {
	return (
		<div>
			

			<li> {props.todo.title} </li>
		</div>
	);
};

export default TodoListItem;