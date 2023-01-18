import React from 'react';
function AddTodoForm() {
return (
    <form>
        <lable htmlFor="todoTitle">Title</lable>
        <input id="todoTitle"></input>
        <button type="submit">Add</button>
    </form>
)
}
export default AddTodoForm;

