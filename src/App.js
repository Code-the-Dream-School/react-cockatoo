import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
// import react from "react";

// create custom hook
// function useSemiPersistentState() {
//   // Create new state variable named todoTitle with setter setTodoTitle
//   const [todoList, setTodoList] = React.useState(
//     JSON.parse(localStorage.getItem("savedTodoList")) || []
//   );

//   // Define a useEffect React hook with todoList as a dependency
//   // Inside the side-effect handler function, save the todoList inside localStorage with the key "savedTodoList"
//   // convert todoList to a string before saving in localStorage
//   React.useEffect(() => {
//     localStorage.setItem("savedTodoList", JSON.stringify(todoList));
//   }, [todoList]);

//   return [todoList, setTodoList];
// }

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            data: {
              todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [],
            },
          }),
        2000
      );
    }).then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
  }, []);
  React.useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  // const [todoList, setTodoList] = useSemiPersistentState("");
  // const [newTodo, setNewTodo] = React.useState("");
  // react.useEffect(() => {});

  // Remove the newTodo state variable and the corresponding JSX that displays it

  // const [newTodo, setNewTodo] = React.useState("");
  //   Inside the App functional component, above the return statement, create a new state variable named newTodo with update function named setNewTodo
  // hint: useState hook

  // Declare a new function named addTodo that takes newTodo as a parameter
  //  Call the setTodoList state setter and use the spread operator to pass the existing Objects in the todoList Array along with the newTodo Object
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }
  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <>
      <h1>Todo List</h1>

      {/* Change the value of the onAddTodo prop for AddTodoForm to addTodo */}

      <AddTodoForm onAddTodo={addTodo} />
      {/* Pass setNewTodo as a callback handler prop named onAddTodo to the AddTodoForm component */}

      {/* Pass todoList state as a prop named todoList to the TodoList component */}

      {isLoading === true ? (
        <p>Loading...</p>
      ) : (
        <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
      )}
    </>
  );
}

export default App;
