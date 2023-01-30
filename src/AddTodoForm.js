import React from 'react';

const AddTodoForm = (props) => {
    // Add props as a parameter in the AddTodoForm function
    const [inputText, setInputText] = React.useState("");
    function handleAddTodo(event) {
        
        // let todoTitle = event.preventDefault();
        event.preventDefault();
        let todoTitle = event.target[0].value;
        console.log(todoTitle);
        setInputText(''); 
        props.onAddTodo(todoTitle)
        // Inside the handleAddTodo function, invoke the onAddTodo callback prop and pass todoTitle as an argument
        };
   
        
        
    
return (
    <form onSubmit={handleAddTodo}>
        <lable htmlFor="todoTitle">Title</lable>
        <input id="todoTitle" name="title" value={inputText} onChange={(event) => setInputText(event.target.value)}></input>
        <button type="submit">Add</button>
    </form>
)
}
export default AddTodoForm;

