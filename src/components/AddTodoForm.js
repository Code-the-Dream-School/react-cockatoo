import React from "react";
import InputWithLabel from "./InputWithLabel";
import PropTypes from 'prop-types'

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = React.useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo({ title: todoTitle, id: Date.now() });
        setTodoTitle("");
    }
    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <InputWithLabel
                    todoTitle={todoTitle}
                    handleTitleChange={handleTitleChange}

                >
                    Title
                </InputWithLabel>
                <button>Add</button>
            </form>
        </div>
    )
}

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func
};

export default AddTodoForm;