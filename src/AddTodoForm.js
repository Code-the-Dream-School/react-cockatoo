import React, {useState} from 'react';


function AddTodoForm ({onAddTodo}) {
    
    const [todoTitle, setTodoTitle] = useState([]);

    function handleTitleChange (event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle); 
        //let newTodoTitle = event.target[0].value;
        console.log(newTodoTitle);
    }

    function handleAddTodo (event){
        event.preventDefault();
        //let todoTitle = event.target[0].value;
        console.log(todoTitle);
        //props.onAddTodo(todoTitle);
        onAddTodo( {title: todoTitle, id: Date.now() } );
        //event.target.reset();  
        setTodoTitle("");
    }

    return (
        <form onSubmit = {handleAddTodo}>
            <label htmlFor="todoTitle"> Title </label>
            <input 
                type="text" 
                id="todoTitle"
                name="title"
                value = {todoTitle}
                onChange = {handleTitleChange}/>
            <button type="submit"> Add</button>
        </form>
    )
}

export default AddTodoForm;