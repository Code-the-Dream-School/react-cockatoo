import React from 'react'

function AddTodoForm () {
  return (
    <div style={{ textAlign: 'center' }}>
        <h1>My Todo List</h1>
      <br/>
        <form>
            <label htmlFor='todoTitle'>Enter New Todo Title</label>
            <br/>
            <br/>
            <input id='todoTitle'></input>
            <button>Add</button>
      </form>
    </div>
  )
}

export default AddTodoForm