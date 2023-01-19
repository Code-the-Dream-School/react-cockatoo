import React from "react";

function AddTodoForm() {
    return (
        <div>
            <form>
                <label> Title </label>
                <input id="todoTitle" htmlFor="todoTitle"></input>
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm;