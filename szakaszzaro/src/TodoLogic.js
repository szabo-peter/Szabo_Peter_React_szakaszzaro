import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const TodoLogic = () =>{
   
    const [text,setText] = useState("");
    const [todoList, setTodoList] = useState([
            {
                id:uuidv4(),
                text: "Teszt kész",
                isDone: true
            },
            {
                id:uuidv4(),
                text: "Kenyeret venni",
                isDone: true
            },
            {
                id:uuidv4(),
                text: "Kimosni  a ruhákat",
                isDone: false
            },
            {
                id:uuidv4(),
                text: "Vizsgára készülni",
                isDone: false
            },
            {
                id:uuidv4(),
                text: "Teszt",
                isDone: false,
            },
        ]);
      
    const addTodoElement = (item) => {
            const data = {
            id: uuidv4(),
            text: item,
            isDone: false
          }
          setTodoList([data, ...todoList]);
        }
      
    const addText = ()=>{
          addTodoElement(text);
          setText("");
        }
      
    const doneTodo = (id) =>{
        const done = todoList.find(e=>e.id===id);
        done.isDone = !done.isDone
        const doneList = todoList.filter(e=> e.isDone);
        const noDoneList = todoList.filter(e=> !e.isDone);        
        setTodoList([...doneList, ...noDoneList]);
      
       }
      
    const removeTodos = (id) =>{
        const newTodoList = todoList.filter(e=> e.id!==id);
        setTodoList([...newTodoList]);
      
       }
      
       const submit = (e) => {
        e.preventDefault();
       }

       return  {submit, text, setText, addText, todoList, doneTodo, removeTodos};

}

export default TodoLogic; 