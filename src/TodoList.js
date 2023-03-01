import React from "react";
import TodoListItem from "./TodoListItem";

// const todoList = [
//     {
//       id: 1,
//       title: "Read the book",
//     },
//     {
//       id: 2,
//       title: "Watch video",
//     },
//     {
//       id: 3,
//       title: "Complete assignment",
//     }
//   ]
// Add props as a parameter to the TodoList functional component
export default function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map(function (item) {
        return <TodoListItem key={item.id} title={item.title} />;
        //         Inside the map() method, use the TodoListItem component
        //  Pass key as a prop equal to the id of the todo object
        //  Pass todo as a prop
      })}
    </ul>
  );
}
