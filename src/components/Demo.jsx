import React, {useState} from 'react';
export const Demo = () =>{
  const [todos,setTodos] = useState({});
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => setTodos(json))
return <pre> userID: {JSON.stringify(todos,null,4)}</pre>  
}
