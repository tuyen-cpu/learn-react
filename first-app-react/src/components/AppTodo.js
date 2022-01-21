import React,{useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function AppTodo() {
    const [todoList, setTodoList] = useState([{id:1,title:'tuyền1'},{id:2,title:'tuyền2'},{id:3,title:'tuyền3'}]);
  console.log('re-render: App')

  function handleTodoFormSubmit(formValues){
    console.log(formValues)
    const newTodo={
      id:~~(Math.random()*1000),
      ...formValues
    }
   
    setTodoList([...todoList,newTodo])
  }

  function handleRemoveToto(id){
    var index = todoList.findIndex(e=>e.id===id)
  const newArr=[...todoList]
    newArr.splice(index,1)
    setTodoList(newArr)
  }
    return (
        <div>
             <TodoForm onSubmit={handleTodoFormSubmit}/>
          <TodoList todoList={todoList} onRemoveClick={handleRemoveToto}/>
        </div>
    );
}

export default AppTodo;