import React from 'react';

function AddTodoForm() {

    return (

        <form>
            <label htmlFor="todoTitle">Title:</label>
            <input id="todoTitle" type="text" />
            <button>Add</button>
        </form>

    );

}


export default AddTodoForm;