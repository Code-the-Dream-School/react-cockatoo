import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import style from "./TodoListItem.module.css";
import { RiAddFill } from "react-icons/ri";
import PropTypes from "prop-types";

// update props to use destructuring
const AddTodoForm = ({ onAddTodo }) => {
  // Add props as a parameter in the AddTodoForm function

  //// key is the name of the prop and
  // value is the PropType

  // Create new state variable named todoTitle with setter setTodoTitle
  const [todoTitle, setTodoTitle] = useState("");

  function handleTitleChange(event) {
    // retrieve the input value from the event object and store in variable named newTodoTitle

    let newTodoTitle = event.target.value;
    console.log(newTodoTitle);
    // call the state setter setTodoTitle and pass newTodoTitle
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    // Inside handleAddTodo, remove the reset() method and replace it with logic to reset the todoTitle state to an empty String

    //     Inside handleAddTodo, update the onAddTodo callback prop to pass an Object instead of a String; Object should have the following properties:
    //     title: equal to todoTitle
    //     id: unique identifier (hint: use Date.now() to generate a unique number)
    //    Disclaimer: we are suggesting Date.now() for now as a placeholder for unique number generation, but in the future you should not use this

    //remove the todoTitle variable and update onAddTodo callback handler to pass our todoTitle state variable instead

    // let todoTitle = event.preventDefault();
    event.preventDefault();

    // console.log(todoTitle);

    onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle("");
    // Inside the handleAddTodo function, invoke the onAddTodo callback prop and pass todoTitle as an argument
  }

  // Add value prop equal to todoTitle from component props */}
  /* Add onChange prop equal to handleTitleChange function reference (we will declare this function in the next step) */
  return (
    <form onSubmit={handleAddTodo}>
      <label className={style.label} htmlFor="todoTitle">
        Title
      </label>
      <div className={style.inputGroupe}>
        <InputWithLabel
          todoTitle={todoTitle}
          handleTitleChange={handleTitleChange}
          children
        ></InputWithLabel>
        <button className={style.addButton} type="submit">
          <RiAddFill size="1rem" color="#262626" />
        </button>
      </div>
    </form>
  );
};

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};
export default AddTodoForm;
