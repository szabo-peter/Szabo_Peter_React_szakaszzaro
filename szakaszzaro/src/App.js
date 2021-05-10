import React from 'react';
import Button from "./Button";
import TodoLogic from "./TodoLogic";
import './App.css';

function App() {
  const {submit, text, setText, addText, todoList, doneTodo, removeTodos} = TodoLogic();

  return (
    <div className="container">
      <div className="kozep">
        <h1>Todo App</h1>
        <form onSubmit={submit}>
          <div className="row">
          <input className="col-7 m-2 p-2" type="text" value={text} onChange={(e) => setText(e.target.value)}/>
          <Button className="primary m-2 col-1" func={addText} buttonText="Hozzáadás"/>
          </div>
          {todoList.map( e => 
            <div key={e.id} className="col-4">
                <input 
                  className="p-2 m-2" 
                  type="checkbox" 
                  id={e.id} 
                  checked={e.isDone?"checked":""} 
                  onChange={() =>doneTodo(e.id) }/>

                <label htmlFor={e.id}>{e.text}</label>
                <Button className="danger m-2 p-2" func={() => removeTodos(e.id)} buttonText="Törlés"/>

            </div>  
            
            )}
          
        </form>
      </div>
    </div>
  );
}

export default App;
