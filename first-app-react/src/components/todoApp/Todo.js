function Todo({todo,onRemoveClick}) {
    console.log('re-render: Todo')
    return ( 
        <div>
        <span>{todo.title}</span>..................<button onClick={()=>{
            onRemoveClick(todo.id)
        }}>Remove</button>

        </div>
     );
}

export default Todo;