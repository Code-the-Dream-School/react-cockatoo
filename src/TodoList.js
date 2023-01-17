
const todoList =[{id: 1, tittle: 'Grocery shopping'}, {id: 2, tittle:'pack boxes'}, {id:3, tittle:'buy headphones'}];

function TodoList() {
  return (
    <div>
    <ul>
      {todoList.map((el)=>{
       return (
        <li key={el.id}>
          {el.tittle}
          </li>
       )
      })}
    </ul>
    </div>
  );
}

export default TodoList;