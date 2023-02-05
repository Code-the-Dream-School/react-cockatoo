import React from "react";

function AddTodoForm({onAddTodo}) {
    const [todoTitle, setTodoTitle] = React.useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo({title: todoTitle, id: Date.now()});
        setTodoTitle('');
    }
    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <label> Title </label>
                <input 
                    id="todoTitle" 
                    htmlFor="todoTitle" 
                    value={todoTitle} 
                    onChange={handleTitleChange}
                    name="title">
                </input>
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm;