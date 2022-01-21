import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

TodoList.propTypes = {
    todoList:PropTypes.array,
    onRemoveClick:PropTypes.func
};
TodoList.defaultProps = {
    todoList:[],
    onRemoveClick:null
};
function TodoList(props) {
    const {todoList,onRemoveClick}=props
 
    return ( 

        <div>
        {todoList.map((todo,index)=><Todo key={index} todo={todo} onRemoveClick={onRemoveClick}/>)}
       
        </div>
     );
}

export default TodoList;