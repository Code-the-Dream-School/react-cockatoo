import * as React from 'react';

function App() {

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List />

    </div>
  );
};

function Search() {

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type= "text" />
    </div>
  )
}; 

function List() {
  const list = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    }, 
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: 'thunx',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 4,
      points: 3,
      objectID: 2,
    },
    {
      title: 'saga',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 5,
      points: 4,
      objectID: 3,
    },
    {
      title: 'native',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 3,
      points: 3,
      objectID: 4,
    },
  ];

  return (
    <div>
       <ul>
        {list.map(function (item) {
          return (
            <li key={item.objectID}>
              <span><a href={item.url}>  {item.title}</a></span>
              <span>  {item.author}</span>
              <span>  {item.num_comments}</span>
              <span>  {item.points}</span>
            
            </li>
          );
        })}
      </ul> 
    </div>
  )
}; 

export default App;





