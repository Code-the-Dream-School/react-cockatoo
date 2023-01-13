import logo from './logo.svg';
import './App.css';



const todoList =[{id: 1, tittle: 'Grocery shopping'}, {id: 2, tittle:'pack boxes'}, {id:3, tittle:'buy headphones'}];

function App() {
  return (
    <div>
    <h1>TO-DO List</h1>
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

export default App;
