import React from 'react';
import TodoListItem from './TodoListItem';

// This code defines a functional component called TodoList that renders a list of to-do items.
// It starts by defining a constant variable todoList which is an array of JavaScript objects that 
// represents the to-do items. Each object has id and title properties.// The TodoList component returns a JSX
 //element that renders a <div> element that contains an unordered // list <ul> element.// Inside the <ul> element, 
 //it uses the map() function to iterate over the todoList array and render a //  custom component called TodoListItem 
// for each item in the array.// The TodoListItem component is passed two props: key and todo. The key prop is set to the 
 //id of the to-do item,//  and the todo prop is set to the entire to-do item object.//  The component exports the TodoList
 // component as the default export, which allows it to be imported and used in//  other parts of the application.// So this 
 // component is creating a  list of to-do items by using the todoList array and passing it to the map() function // that iterates 
  //over the array and render a component TodoListItem for each item in the array. It also passing two props
//  to the component TodoListItem which is key and todo and export the component as the default export.

let todoList =[
  {
   id: 1,
    title: "Call your Mother",
      },
  {
   id: 2,
    title: "Water the plants",
   
   },
  {
     id: 3,
     title: "Find a Loft",
   
   },
   ];

const TodoList = () => {
	return (
		<div>

      {/* c.	  Inside the map() method, use the TodoListItem component
i.	  Pass key as a prop equal to the id of the todo object
ii.	  Pass todo as a prop */}

        <ul style={{ listStyleType: 'none' }}>
				{todoList.map((todo) => (
					<TodoListItem key={todo.id} todo={todo} />
				))}
			</ul>
		</div>
	);
};

export default TodoList;